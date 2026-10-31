# Account / landing E2E tests

```sh
yarn install
npx playwright install chromium
npm run test:e2e
```

To use an existing Chrome installation instead:

```sh
E2E_CHROMIUM_PATH=/usr/bin/google-chrome npm run test:e2e
```

The runner builds the application, starts the real backend on an available port,
initializes a fresh SQLite database in a temporary directory, and drives headless
Chromium. It requires the shipped embedding model under `data/models`, like a
normal first application startup. Native dependencies must be built for the Node
version running the tests (use `npm rebuild better-sqlite3` if necessary).

Existing application accounts, projects and the running development server are
not modified. Only the frontend and model directories are linked read-only by
convention into the temporary workspace. The test database and server are cleaned
up even on failure.

## Coverage

28 checks cover real browser registration/login (landing and classic pages),
English defaults, optional profile/password updates, password whitespace,
Cookie/Bearer sessions, expired tokens, cross-tab sign-out, SPA account settings,
admin CRUD/search/filter/reset/disable/enable, last-admin protections, concurrent
username conflicts, English built-in agent/provider labels and voice prompts, deleted-account ID reuse, tenant isolation, project counts
and ownership transfer, registration rate limiting, and desktop/mobile layouts.
The suite also fails on uncaught browser JavaScript errors.

The build independently parses the checked-in SPA bundle and inline scripts to
catch syntax errors that backend TypeScript compilation cannot detect.

The runner prints a `/tmp/sandrama-e2e-report-*` directory containing `results.json`,
`server.log`, screenshots and a Playwright trace. Open the trace with:

```sh
npx playwright show-trace /tmp/sandrama-e2e-report-<run>/trace.zip
```

Scope: the new authentication, account management and landing experience. The
suite does not call paid AI providers or test actual image/video generation.
