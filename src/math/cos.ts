import { fact } from "./fact";

/**
 * Computes the cosine of a given number `x` to a specified precision `p`.
 *
 * @param x - The input number for which cosine needs to be calculated.
 * @param [p=7] - The number of decimal places of precision for the result.
 *
 * @example
 * cos(Math.PI / 2);
 * // Returns: 0
 *
 * @example
 * cos(Math.PI / 4, 5);
 * // Returns: 0.7071
 */

function cos(x: number, p: number = 3) {
  let r = 0;
  for (let i = 0; i <= 10; i++) {
    let c = 2 * i;
    let [y, z] = [(-1) ** i * x ** c, fact(c)];
    r += y / z;
  }
  let e = 10 ** p;
  return Math.round((r + Number.EPSILON) * e) / e;
}

export { cos };
