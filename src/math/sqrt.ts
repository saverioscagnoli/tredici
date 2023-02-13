import { abs } from "./abs";

/**
 * Computes the square root of a given number `n`.
 *
 * @param x - The input number for which the square root needs to be calculated.
 *
 * @example
 * sqrt(9);
 * // Returns: 3
 *
 * @example
 * sqrt(16);
 * // Returns: 4
 */

function sqrt(x: number) {
  if (x < 0) return NaN;
  let [n, pr] = [1, 1e-7];
  while (abs(n * n - x) > pr) {
    n = 0.5 * (n + x / n);
  }
  return n;
}

export { sqrt };
