import type { Knex } from "knex";

/** Allocate monotonically increasing IDs inside the account-write transaction.
 * SQLite INTEGER PRIMARY KEY alone can reuse a deleted user's ID, which would
 * make their still-signed JWT valid for the next account with tokenVersion=0.
 */
export async function allocateUserId(trx: Knex.Transaction): Promise<number> {
  const key = "userIdSequence";
  const sequence = await trx("o_setting").where("key", key).first();
  const highest = await trx("o_user").max("id as maxId").first();
  const id = Math.max(Number(sequence?.value ?? 0) + 1, Number(highest?.maxId ?? 0) + 1, Date.now());
  if (!Number.isSafeInteger(id)) throw new Error("User ID sequence exhausted");
  if (sequence)
    await trx("o_setting")
      .where("key", key)
      .update({ value: String(id) });
  else await trx("o_setting").insert({ key, value: String(id) });
  return id;
}
