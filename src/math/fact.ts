/**
 * Computes the factorial of a given number `x`.
 *
 * @param x - The input number for which the factorial needs to be calculated.
 *
 * @example
 * fact(5);
 * // Returns: 120
 *
 * @example
 * fact(3);
 * // Returns: 6
 */

function fact(x: number) {
  let r = x;
  if (x === 0) return 1;
  while (x > 1) {
    x--;
    r *= x;
  }
  return r;
}

export { fact };
