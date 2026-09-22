import crypto from "node:crypto";
import { promisify } from "node:util";

const scryptAsync = promisify(crypto.scrypt);
const SCRYPT_N = 16_384;
const SCRYPT_R = 8;
const SCRYPT_P = 1;
const KEY_LENGTH = 64;

/** Hash a password using the Node.js built-in scrypt implementation. */
export async function hashPassword(password: string): Promise<string> {
  if (typeof password !== "string" || password.length < 8) {
    throw new Error("密码至少需要 8 个字符");
  }
  const salt = crypto.randomBytes(16);
  const derivedKey = (await (scryptAsync as any)(password, salt, KEY_LENGTH, {
    N: SCRYPT_N,
    r: SCRYPT_R,
    p: SCRYPT_P,
    maxmem: 32 * 1024 * 1024,
  })) as Buffer;
  return `scrypt$${SCRYPT_N}$${SCRYPT_R}$${SCRYPT_P}$${salt.toString("base64url")}$${derivedKey.toString("base64url")}`;
}

/** Supports the legacy plaintext format during a one-time migration. */
export async function verifyPassword(password: string, stored: string): Promise<boolean> {
  if (!stored) return false;
  if (!stored.startsWith("scrypt$")) return password === stored;

  const parts = stored.split("$");
  if (parts.length !== 6) return false;
  const [, nText, rText, pText, saltText, hashText] = parts;
  const n = Number(nText);
  const r = Number(rText);
  const p = Number(pText);
  if (!Number.isSafeInteger(n) || !Number.isSafeInteger(r) || !Number.isSafeInteger(p)) return false;

  try {
    const salt = Buffer.from(saltText, "base64url");
    const expected = Buffer.from(hashText, "base64url");
    const actual = (await (scryptAsync as any)(password, salt, expected.length, {
      N: n,
      r,
      p,
      maxmem: 32 * 1024 * 1024,
    })) as Buffer;
    return actual.length === expected.length && crypto.timingSafeEqual(actual, expected);
  } catch {
    return false;
  }
}

export function isLegacyPassword(stored: string | null | undefined): boolean {
  return Boolean(stored && !stored.startsWith("scrypt$"));
}

export function createTokenKey(): string {
  return crypto.randomBytes(32).toString("hex");
}

export type AuthenticatedUser = {
  id: number;
  name: string;
  role: "admin" | "user";
  disabled: boolean;
  tokenVersion: number;
};

export function isAdmin(user: { role?: string | null } | null | undefined): boolean {
  return user?.role === "admin";
}
