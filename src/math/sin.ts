import { fact } from "./fact";

/**
 * Computes the sine of a given number `x` to a specified precision `p`.
 *
 * @param x - The input number for which sine needs to be calculated.
 * @param [p=7] - The number of decimal places of precision for the result.
 *
 * @example
 * sin(Math.PI / 2);
 * // Returns: 1
 *
 * @example
 * sin(Math.PI / 6, 4);
 * // Returns: 0.5
 */

function sin(x: number, p: number = 3) {
  let r = 0;
  for (let i = 0; i <= 10; i++) {
    let c = 2 * i + 1;
    let [y, z] = [(-1) ** i * x ** c, fact(c)];
    r += y / z;
  }
  let e = 10 ** p;
  return Math.round((r + Number.EPSILON) * e) / e;
}

export { sin };
