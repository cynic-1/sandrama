// Real HTTP + Chromium tests against a fresh, isolated SQLite database (no mocks).
// Prerequisites: dependencies, data/models, and `npx playwright install chromium`.
// Optional: E2E_CHROMIUM_PATH=/usr/bin/google-chrome npm run test:e2e
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import net from 'node:net';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { chromium } from 'playwright';
import Database from 'better-sqlite3';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sandbox = fs.mkdtempSync(path.join(os.tmpdir(), 'sandrama-e2e-data-'));
const reportDir = fs.mkdtempSync(path.join(os.tmpdir(), 'sandrama-e2e-report-'));
fs.mkdirSync(path.join(sandbox, 'data'));
for (const dir of ['web', 'models']) {
  fs.symlinkSync(path.join(root, 'data', dir), path.join(sandbox, 'data', dir), 'junction');
}
const socket = net.createServer();
socket.listen(0, '127.0.0.1');
await once(socket, 'listening');
const port = socket.address().port;
await new Promise(resolve => socket.close(resolve));
const base = `http://127.0.0.1:${port}`;
const adminPassword = 'E2E-Admin-Password!';
const log = fs.openSync(path.join(reportDir, 'server.log'), 'w');
const server = spawn(process.execPath, [path.join(root, 'data/serve/app.js')], {
  cwd: sandbox,
  env: { ...process.env, PORT: String(port), NODE_ENV: 'prod', SANDRAMA_ADMIN_PASSWORD: adminPassword },
  stdio: ['ignore', log, log],
});
fs.closeSync(log);
const results = [];
let browser, db;
const pageErrors = [];
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
async function check(name, run) {
  const start = Date.now();
  try {
    await run();
    results.push({ name, status: 'passed', ms: Date.now() - start });
    console.log(`PASS ${name}`);
  } catch (error) {
    results.push({ name, status: 'failed', error: error.stack, ms: Date.now() - start });
    throw error;
  }
}
async function api(endpoint, { token, body, method = body === undefined ? 'GET' : 'POST', cookie } = {}) {
  const response = await fetch(base + '/api/' + endpoint, {
    method,
    headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: token } : {}), ...(cookie ? { Cookie: cookie } : {}) },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  const json = await response.json();
  return { status: response.status, data: json.data, json, cookie: response.headers.get('set-cookie') };
}
async function login(username, password) {
  const result = await api('login/login', { body: { username, password } });
  assert.equal(result.status, 200, JSON.stringify(result.json));
  return result;
}
async function shown(page, selector) { await page.locator(selector).waitFor({ state: 'visible' }); }
async function waitProfile(page, name) {
  await page.waitForFunction(name => document.querySelector('#myNameInput')?.value === name, name);
}
async function authUI(page, name, password, register = false) {
  await page.locator(register ? '#sdlTabRegister' : '#sdlTabLogin').click();
  await page.locator('#sdlUsername').fill(name);
  await page.locator('#sdlPassword').fill(password);
  if (register) await page.locator('#sdlConfirmPassword').fill(password);
  await page.locator('#sdlSubmitBtn').click();
  await page.waitForURL('**/#/project');
  await shown(page, '#app .main');
  await page.locator('#sd-landing-portal').waitFor({ state: 'hidden' });
}
function watch(page) { page.on('pageerror', error => pageErrors.push(error.message)); }

try {
  for (let attempt = 0; ; attempt++) {
    if (server.exitCode !== null) throw new Error('Server exited; see ' + reportDir);
    try { if ((await fetch(base)).ok) break; } catch {}
    if (attempt > 300) throw new Error('Server startup timed out; see ' + reportDir);
    await delay(200);
  }
  db = new Database(path.join(sandbox, 'data/db2.sqlite'));
  let member, admin, memberToken, adminToken;
  await check('Unauthenticated APIs and English validation errors', async () => {
    for (const endpoint of ['setting/loginConfig/getUser', 'setting/userManagement/listUsers']) {
      const result = await api(endpoint);
      assert.equal(result.status, 401);
      assert.match(result.json.message, /token/i);
    }
    const invalid = await api('login/register', { body: { username: 'invalid', password: '12345' } });
    assert.equal(invalid.status, 400);
    assert.doesNotMatch(JSON.stringify(invalid.json), /[\u4e00-\u9fff]/);
  });
  await check('6-character registration, no role escalation, secure password hash and cookie', async () => {
    member = await api('login/register', { body: { username: 'ApiMember', password: '123456', role: 'admin' } });
    assert.equal(member.status, 200);
    memberToken = member.data.token;
    assert.equal(member.data.role, 'user');
    assert.match(member.cookie, /HttpOnly/i);
    assert.match(member.cookie, /SameSite=Lax/i);
    const stored = db.prepare('SELECT password FROM o_user WHERE id = ?').get(member.data.id).password;
    assert.match(stored, /^scrypt\$/);
    assert.notEqual(stored, '123456');
    const cookieOnly = await api('setting/loginConfig/getUser', { cookie: member.cookie.split(';')[0] });
    assert.equal(cookieOnly.data.id, member.data.id);
  });
  await check('Case-insensitive login, duplicate registration and concurrent registration', async () => {
    assert.equal((await login('apimember', '123456')).data.id, member.data.id);
    assert.equal((await api('login/register', { body: { username: 'APIMEMBER', password: '123456' } })).status, 400);
    const concurrent = await Promise.all(['RaceUser', 'raceuser'].map(username => api('login/register', { body: { username, password: '123456' } })));
    assert.deepEqual(concurrent.map(r => r.status).sort(), [200, 400]);
    assert.equal(db.prepare("SELECT count(*) AS n FROM o_user WHERE lower(name) = 'raceuser'").get().n, 1);
  });
  await check('Ordinary users cannot access any administrator CRUD or another account', async () => {
    for (const [endpoint, body] of [
      ['listUsers', undefined], ['createUser', { name: 'forged', password: '123456' }],
      ['updateUser', { id: 1, role: 'user' }], ['deleteUser', { id: 1 }],
    ]) {
      assert.equal((await api('setting/userManagement/' + endpoint, { token: memberToken, body })).status, 403);
    }
    assert.equal((await api('setting/loginConfig/updateUserPwd', { token: memberToken, body: { id: 1, name: 'hijacked' } })).status, 403);
  });
  await check('Profile rename, whitespace-preserving password and token revocation', async () => {
    const changed = await api('setting/loginConfig/updateUserPwd', { token: memberToken, body: { name: 'ApiRenamed', password: ' 1234 ' } });
    assert.equal(changed.status, 200);
    assert.equal((await api('setting/loginConfig/getUser', { token: memberToken })).status, 401);
    memberToken = changed.data.token;
    assert.equal((await api('setting/loginConfig/getUser', { token: memberToken })).data.name, 'ApiRenamed');
    assert.equal((await api('login/login', { body: { username: 'ApiRenamed', password: '123456' } })).status, 400);
    assert.equal((await login('apirenamed', ' 1234 ')).data.id, member.data.id);
  });
  await check('Last-admin safeguards and administrator self-edit keep valid sessions', async () => {
    admin = await login('admin', adminPassword);
    adminToken = admin.data.token;
    for (const body of [{ id: 1, disabled: true }, { id: 1, role: 'user' }]) {
      const result = await api('setting/userManagement/updateUser', { token: adminToken, body });
      assert.equal(result.status, 400);
      assert.doesNotMatch(JSON.stringify(result.json), /[\u4e00-\u9fff]/);
    }
    assert.equal((await api('setting/userManagement/deleteUser', { token: adminToken, body: { id: 1 } })).status, 400);
    const unchanged = await api('setting/userManagement/updateUser', { token: adminToken, body: { id: 1, name: 'admin', role: 'admin', disabled: false } });
    assert.equal(unchanged.status, 200);
    assert.equal((await api('setting/loginConfig/getUser', { token: adminToken })).status, 200);
    const changed = await api('setting/userManagement/updateUser', { token: adminToken, body: { id: 1, password: '654321' } });
    assert.equal(changed.status, 200);
    assert.ok(changed.data.token);
    assert.equal((await api('setting/loginConfig/getUser', { token: adminToken })).status, 401);
    adminToken = changed.data.token;
    assert.equal((await api('setting/loginConfig/getUser', { token: adminToken })).status, 200);
  });
  await check('Admin creation, duplicate names, disable/enable and forced password resets', async () => {
    const created = await api('setting/userManagement/createUser', { token: adminToken, body: { name: 'Managed', password: '123456' } });
    assert.equal(created.status, 201);
    assert.doesNotMatch(JSON.stringify(created.json), /[\u4e00-\u9fff]/);
    const id = created.data.id;
    const old = (await login('managed', '123456')).data.token;
    assert.equal((await api('setting/userManagement/createUser', { token: adminToken, body: { name: 'MANAGED', password: '123456' } })).status, 409);
    assert.equal((await api('setting/userManagement/updateUser', { token: adminToken, body: { id, disabled: true } })).status, 200);
    assert.equal((await api('setting/loginConfig/getUser', { token: old })).status, 401);
    assert.equal((await api('login/login', { body: { username: 'managed', password: '123456' } })).status, 400);
    await api('setting/userManagement/updateUser', { token: adminToken, body: { id, disabled: false, password: '654321' } });
    assert.equal((await api('setting/loginConfig/getUser', { token: old })).status, 401);
    await login('managed', '654321');
  });
  await check('Built-in agent and provider labels are English without changing provider keys', async () => {
    const agents = await api('setting/agentDeploy/getAgentDeploy', { token: adminToken, body: {} });
    assert.equal(agents.status, 200);
    assert.doesNotMatch(JSON.stringify(agents.data), /[\u4e00-\u9fff]/);
    const vendors = await api('setting/vendorConfig/getVendorList', { token: adminToken, body: {} });
    assert.equal(vendors.status, 200);
    const openai = vendors.data.find(v => v.id === 'openai');
    assert.equal(openai.name, 'OpenAI-compatible API');
    assert.deepEqual(openai.inputs.map(input => input.key), ['apiKey', 'baseUrl']);
    assert.doesNotMatch(JSON.stringify({ name: openai.name, description: openai.description, inputs: openai.inputs }), /[\u4e00-\u9fff]/);
  });
  await check('Legacy API status messages are English without translating response data', async () => {
    const denied = await api('setting/skillManagement/getSkillContent', { token: adminToken, body: { path: '../outside' } });
    assert.equal(denied.status, 400);
    assert.equal(denied.json.message, 'Invalid path');
    const profile = await api('setting/loginConfig/getUser', { token: adminToken });
    assert.equal(profile.json.message, 'Success');
  });
  await check('Built-in prompt titles and voice instructions are English; custom text is preserved', async () => {
    let prompts = await api('setting/promptManage/getPrompt', { token: adminToken, body: {} });
    assert.equal(prompts.status, 200);
    assert.ok(prompts.data.every(p => !/[\u4e00-\u9fff]/.test(p.name)));
    const voice = prompts.data.find(p => p.type === 'audioBindPrompt');
    assert.ok(voice);
    assert.doesNotMatch(voice.data, /[\u4e00-\u9fff]/);
    assert.match(voice.data, /audioId/);
    const custom = 'Custom voice instructions: keep the supplied audioId.';
    assert.equal((await api('setting/promptManage/updatePrompt', { token: adminToken, body: { id: voice.id, data: custom } })).status, 200);
    prompts = await api('setting/promptManage/getPrompt', { token: adminToken, body: {} });
    assert.equal(prompts.data.find(p => p.id === voice.id).data, custom);
  });
  await check('Concurrent admin creates and profile renames reject duplicate names', async () => {
    const parallel = await Promise.all(['ParallelUser', 'paralleluser'].map(name => api('setting/userManagement/createUser', {
      token: adminToken, body: { name, password: '123456' },
    })));
    assert.deepEqual(parallel.map(r => r.status).sort(), [201, 409]);
    assert.equal((await api('setting/loginConfig/updateUserPwd', { token: memberToken, body: { name: 'ADMIN' } })).status, 409);
    assert.equal((await api('setting/userManagement/updateUser', { token: adminToken, body: { id: member.data.id, name: 'MANAGED' } })).status, 409);
  });
  await check('Deleting the highest user ID cannot revive its JWT for a newly registered account', async () => {
    const victim = await api('login/register', { body: { username: 'DeletedIdentity', password: '123456' } });
    assert.equal(victim.status, 200);
    assert.equal((await api('setting/userManagement/deleteUser', { token: adminToken, body: { id: victim.data.id } })).status, 200);
    const successor = await api('login/register', { body: { username: 'NewIdentity', password: '123456' } });
    assert.equal(successor.status, 200);
    assert.ok(successor.data.id > victim.data.id);
    assert.equal((await api('setting/loginConfig/getUser', { token: victim.data.token })).status, 401);
  });
  await check('Workspace isolation, accurate counts, atomic project transfer on deletion', async () => {
    db.prepare('INSERT INTO o_project (id,name,userId) VALUES (?,?,?)').run(90001, 'Private project', member.data.id);
    const own = await api('project/getProject', { token: memberToken, body: {} });
    assert.equal(own.data.length, 1);
    assert.equal((await api('setting/loginConfig/getUser', { token: memberToken })).data.projectCount, 1);
    const other = await login('managed', '654321');
    assert.equal((await api('project/getProject', { token: other.data.token, body: {} })).data.length, 0);
    assert.equal((await api('project/editProject', { token: other.data.token, body: { id: 90001 } })).status, 403);
    const users = await api('setting/userManagement/listUsers', { token: adminToken });
    assert.equal(users.data.find(u => u.id === member.data.id).projectCount, 1);
    assert.equal((await api('setting/userManagement/deleteUser', { token: adminToken, body: { id: member.data.id } })).status, 200);
    assert.equal(db.prepare('SELECT userId FROM o_project WHERE id = 90001').get().userId, 1);
    assert.equal((await api('setting/loginConfig/getUser', { token: memberToken })).status, 401);
  });

  browser = await chromium.launch({
    headless: true,
    ...(process.env.E2E_CHROMIUM_PATH ? { executablePath: process.env.E2E_CHROMIUM_PATH } : {}),
    args: ['--no-sandbox'],
  });
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  await context.tracing.start({ screenshots: true, snapshots: true });
  const page = await context.newPage();
  watch(page);
  await check('Landing and SPA render, English default, section links do not change router hash', async () => {
    await page.goto(base);
    await shown(page, '#sd-landing-portal');
    await page.locator('#app .loginPage').waitFor({ state: 'attached' });
    assert.equal(await page.locator('html').getAttribute('lang'), 'en');
    assert.equal(await page.evaluate(() => localStorage.getItem('locale')), 'en');
    assert.equal(await page.locator('.sdl-brand img').getAttribute('src'), './studio-logo.png');
    const before = new URL(page.url()).hash;
    await page.getByText('Capabilities', { exact: true }).click();
    assert.equal(new URL(page.url()).hash, before);
    await page.screenshot({ path: path.join(reportDir, 'landing-desktop.png'), fullPage: true });
  });
  await check('Browser registration: password mismatch, 6-character success and real workspace', async () => {
    await page.locator('#sdlNavRegister').click();
    await page.locator('#sdlUsername').fill('BrowserCreator');
    await page.locator('#sdlPassword').fill('123456');
    await page.locator('#sdlConfirmPassword').fill('123457');
    await page.locator('#sdlSubmitBtn').click();
    assert.match(await page.locator('#sdlAuthMsg').textContent(), /do not match/);
    await authUI(page, 'BrowserCreator', '123456', true);
    assert.equal(await page.evaluate(() => localStorage.getItem('userRole')), 'user');
    assert.equal(await page.locator('html').getAttribute('theme-mode'), 'dark');
    assert.match(await page.locator('.helloGuide .welcomeLogo').getAttribute('src'), /studio-logo\.png/);
    await page.screenshot({ path: path.join(reportDir, 'workspace.png') });
  });
  await check('SPA account settings render and allow saving a profile without changing password', async () => {
    const skip = page.getByText('Skip boot', { exact: true });
    if (await skip.isVisible()) await skip.click();
    await page.locator('.main .menu .item').last().click();
    await shown(page, '.settingMenu');
    await page.locator('.settingMenu').getByText('Account & Password', { exact: true }).click();
    await shown(page, '.settingContent button[type=submit]');
    assert.equal(await page.locator('.settingContent').getByRole('button', { name: 'User Management & Account Center', exact: true }).isVisible(), true);
    const response = page.waitForResponse(response => response.url().endsWith('/api/setting/loginConfig/updateUserPwd'));
    await page.locator('.settingContent button[type=submit]').click();
    assert.equal((await response).status(), 200);
  });
  await check('Ordinary account UI, profile rename/password, refresh, sign-out and cookie removal', async () => {
    await page.goto(base + '/user-management.html');
    await waitProfile(page, 'BrowserCreator');
    assert.equal(await page.locator('#adminColumn').isVisible(), false);
    assert.equal(await page.locator('#nonAdminColumn').isVisible(), true);
    await page.locator('#myNameInput').fill('BrowserRenamed');
    await page.locator('#myPasswordInput').fill(' 4321 ');
    await page.locator('#myConfirmInput').fill(' 4321 ');
    await page.locator('#profileForm button[type=submit]').click();
    await page.waitForFunction(() => document.querySelector('#welcomeHeading')?.textContent === 'Welcome, BrowserRenamed');
    await page.reload();
    await waitProfile(page, 'BrowserRenamed');
    await page.locator('#logoutBtn').click();
    await shown(page, '#sd-landing-portal');
    await shown(page, '#sdlLoggedOutView');
    assert.equal(await page.evaluate(() => localStorage.getItem('token')), null);
    assert.equal((await context.cookies()).filter(c => c.name === 'sd_token').length, 0);
    await authUI(page, 'browserrenamed', ' 4321 ');
  });
  await check('Explore Home event and consumed landing query do not trap returning creators', async () => {
    await page.evaluate(() => window.dispatchEvent(new CustomEvent('sd-open-landing')));
    await shown(page, '#sdlLoggedInView');
    await page.locator('#sdlContinueStudioBtn').click();
    await page.goto(base + '/?landing=1');
    await shown(page, '#sdlLoggedInView');
    assert.equal(new URL(page.url()).searchParams.has('landing'), false);
    await page.locator('#sdlContinueStudioBtn').click();
    await page.reload();
    await shown(page, '#app .main');
    assert.equal(await page.locator('#sd-landing-portal').isVisible(), false);
  });
  await check('Expired local token recovers to sign-in instead of false active-session state', async () => {
    await page.evaluate(() => localStorage.setItem('token', 'Bearer invalid-account-session'));
    await page.goto(base + '/user-management.html');
    await shown(page, '#sdlLoggedOutView');
    assert.equal(await page.evaluate(() => localStorage.getItem('token')), null);
    await page.evaluate(() => localStorage.setItem('token', 'Bearer invalid-session'));
    await page.goto(base + '/?landing=1');
    await shown(page, '#sdlLoggedOutView');
    await page.waitForFunction(() => localStorage.getItem('token') === null);
    await authUI(page, 'admin', '654321');
  });
  await check('Admin UI creates users and searches/filters the directory', async () => {
    await page.goto(base + '/user-management.html');
    await waitProfile(page, 'admin');
    await shown(page, '#adminColumn');
    const form = page.locator('#createForm');
    await form.locator('[name=name]').fill('BrowserManaged');
    await form.locator('[name=password]').fill('123456');
    await form.locator('button[type=submit]').click();
    await page.locator('#usersBody tr').filter({ hasText: 'BrowserManaged' }).waitFor();
    await page.locator('#searchInput').fill('browsermanaged');
    assert.equal(await page.locator('#usersBody tr').count(), 1);
    await page.locator('#roleFilter').selectOption('admin');
    assert.equal(await page.locator('#usersBody tr').count(), 0);
    await page.locator('#roleFilter').selectOption('user');
    assert.equal(await page.locator('#usersBody tr').count(), 1);
  });
  await check('Admin UI edits roles/passwords, disables/enables and deletes accounts', async () => {
    const row = page.locator('#usersBody tr').filter({ hasText: 'BrowserManaged' });
    await row.locator('[data-action=edit]').click();
    await page.locator('#editPassword').fill('654321');
    await page.locator('#editRole').selectOption('admin');
    await page.locator('#editForm button[type=submit]').click();
    await page.locator('#editModal').waitFor({ state: 'hidden' });
    await page.locator('#roleFilter').selectOption('all');
    await row.locator('.badge-admin').waitFor();
    await login('browsermanaged', '654321');
    await row.locator('[data-action=toggle]').click();
    await row.locator('.badge-disabled').waitFor();
    await page.locator('#statusFilter').selectOption('active');
    assert.equal(await page.locator('#usersBody tr').count(), 0);
    await page.locator('#statusFilter').selectOption('all');
    await row.locator('[data-action=toggle]').click();
    await row.locator('.badge-active').waitFor();
    page.once('dialog', dialog => dialog.accept());
    await row.locator('[data-action=delete]').click();
    await row.waitFor({ state: 'detached' });
    assert.equal((await api('login/login', { body: { username: 'BrowserManaged', password: '654321' } })).status, 400);
  });
  await check('Admin UI self-edit and password reset refresh the token rather than signing out', async () => {
    await page.locator('#searchInput').fill('');
    const self = page.locator('#usersBody tr').filter({ hasText: '(You)' });
    await self.locator('[data-action=edit]').click();
    await page.locator('#editForm button[type=submit]').click();
    await page.locator('#editModal').waitFor({ state: 'hidden' });
    await waitProfile(page, 'admin');
    await self.locator('[data-action=edit]').click();
    await page.locator('#editPassword').fill('123456');
    await page.locator('#editForm button[type=submit]').click();
    await page.locator('#editModal').waitFor({ state: 'hidden' });
    await page.reload();
    await waitProfile(page, 'admin');
  });
  await check('Mobile landing/account layouts stay within viewport', async () => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(base + '/?landing=1');
    await shown(page, '#sdlLoggedInView');
    assert.ok(await page.evaluate(() => document.querySelector('#sd-landing-portal').scrollWidth <= innerWidth));
    await page.screenshot({ path: path.join(reportDir, 'landing-mobile.png') });
    await page.goto(base + '/user-management.html');
    await waitProfile(page, 'admin');
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    await page.screenshot({ path: path.join(reportDir, 'account-mobile.png'), fullPage: true });
  });
  await check('Cross-tab sign-out clears the other tab workspace', async () => {
    const otherTab = await context.newPage(); watch(otherTab);
    await otherTab.goto(base + '/#/project');
    await shown(otherTab, '#app .main');
    await page.locator('#logoutBtn').click();
    await shown(page, '#sdlLoggedOutView');
    await shown(otherTab, '#sdlLoggedOutView');
    await otherTab.close();
  });
  await check('Classic login is reachable and supports registration', async () => {
    const classic = await browser.newPage(); watch(classic);
    await classic.goto(base + '/#/login');
    await shown(classic, '#app .loginPage');
    assert.equal(await classic.locator('#sd-landing-portal').isVisible(), false);
    await classic.locator('.loginPage').getByRole('button', { name: /Don't have an account/ }).click();
    const inputs = classic.locator('.login-form input');
    await inputs.nth(0).fill('ClassicCreator');
    await inputs.nth(1).fill('123456');
    await inputs.nth(2).fill('123456');
    await classic.locator('.loginPage').getByRole('button', { name: 'Create Account', exact: true }).click();
    await classic.waitForURL('**/#/project');
    await shown(classic, '#app .main');
    await classic.close();
  });
  await check('Long admin-created usernames can sign in through the landing form', async () => {
    const longName = 'LongStudioUser_'.repeat(3);
    const freshAdmin = await login('admin', '123456');
    const created = await api('setting/userManagement/createUser', { token: freshAdmin.data.token, body: { name: longName, password: '123456' } });
    assert.equal(created.status, 201);
    await page.goto(base + '/?landing=1');
    await shown(page, '#sdlLoggedOutView');
    await authUI(page, longName, '123456');
  });
  await check('No uncaught browser JavaScript errors', async () => assert.deepEqual(pageErrors, []));
  await context.tracing.stop({ path: path.join(reportDir, 'trace.zip') });
  await check('Registration rate limiting returns English 429', async () => {
    let result;
    for (let i = 0; i < 9; i++) result = await api('login/register', { body: { username: 'ApiMember', password: '123456' } });
    assert.equal(result.status, 429);
    assert.match(result.json.message, /Too many/);
  });
} catch (error) {
  console.error(error);
  process.exitCode = 1;
} finally {
  if (browser) {
    if (process.exitCode) {
      for (const [i, context] of browser.contexts().entries()) {
        for (const [j, page] of context.pages().entries()) {
          await page.screenshot({ path: path.join(reportDir, `failure-${i}-${j}.png`), fullPage: true }).catch(() => {});
        }
        await context.tracing.stop({ path: path.join(reportDir, `failure-trace-${i}.zip`) }).catch(() => {});
      }
    }
    await browser.close();
  }
  db?.close();
  const exited = once(server, 'exit');
  server.kill('SIGTERM');
  await Promise.race([exited, delay(5000)]);
  if (server.exitCode === null && server.signalCode === null) server.kill('SIGKILL');
  fs.rmSync(sandbox, { recursive: true, force: true });
  fs.writeFileSync(path.join(reportDir, 'results.json'), JSON.stringify({ results, pageErrors }, null, 2));
  console.log(`\n${results.filter(r => r.status === 'passed').length}/${results.length} checks passed. Report: ${reportDir}`);
}
