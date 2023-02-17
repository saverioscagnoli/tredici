import { randomBytes } from "crypto";

/**
 * Generates a random integer within a specified range.
 *
 * @param [min=Number.MIN_SAFE_INTEGER] - The minimum value of the range.
 * @param [max=Number.MAX_SAFE_INTEGER] - The maximum value of the range.
 *
 * @example
 *
 * // Generate a random integer between 1 and 10
 * const randomInt = rng(1, 10);
 *
 * // Generate a random integer with no specified range (defaults to MIN_SAFE_INTEGER and MAX_SAFE_INTEGER)
 * const randomInt2 = rng();
 */

function rng(
  min: number = Number.MIN_SAFE_INTEGER,
  max: number = Number.MAX_SAFE_INTEGER
): number {
  let rg = max - min + 1;
  let b = randomBytes(4);
  let n = (b.readUInt32LE(0) % rg) + min;
  return n;
}

export { rng };
