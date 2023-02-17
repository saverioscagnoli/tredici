import { cos } from "./cos";
import { sin } from "./sin";

/**
 * Calculates the tangent of an angle in radians or degrees.
 *
 * @param x - The angle in radians or degrees.
 * @param [deg=false] - Whether the angle is in degrees or not. Defaults to false.
 *
 * @throws Throws an error if the cosine of the angle is 0, as the tangent is not defined in this case.
 *
 * @example
 *
 * // Find the tangent of 45 degrees
 * const result = tan(45, true);
 * console.log(result); // Output: 1
 *
 * // Find the tangent of PI/4 radians
 * const result2 = tan(Math.PI/4);
 * console.log(result2); // Output: 1
 *
 */

function tan(x: number, deg: boolean = false) {
  let c = cos(x, deg);
  if (!c)
    throw new Error("The cosine is 0, therefore the tangent is not defined.");
  return sin(x, deg) / c;
}

export { tan };
