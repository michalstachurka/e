import { createHash, randomBytes, scrypt as scryptCallback, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";

const scrypt = promisify(scryptCallback);

export async function hashPassword(password: string) {
  const salt = randomBytes(16);
  const key = await scrypt(password, salt, 64) as Buffer;
  return `scrypt$${salt.toString("base64url")}$${key.toString("base64url")}`;
}

export async function verifyPassword(password: string, encoded: string) {
  const [algorithm, saltValue, keyValue] = encoded.split("$");
  if (algorithm !== "scrypt" || !saltValue || !keyValue) return false;
  const expected = Buffer.from(keyValue, "base64url");
  const actual = await scrypt(password, Buffer.from(saltValue, "base64url"), expected.length) as Buffer;
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

export function createOpaqueToken(bytes = 24) {
  return randomBytes(bytes).toString("base64url");
}

export function hashToken(token: string) {
  return createHash("sha256").update(token).digest("hex");
}

export function sanitizeText(value: string, maxLength = 500) {
  return value.replace(/[<>\u0000-\u001F]/g, "").trim().slice(0, maxLength);
}
