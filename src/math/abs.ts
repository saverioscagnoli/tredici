/**
 * Calculates the absolute value of a given number `n`.
 * *
 * @param x - The number to find the absolute value of.
 * @example
 * abs(-5);
 * // Returns: 5
 */

function abs(x: number) {
  return x < 0 ? -x : x;
}

export { abs };
