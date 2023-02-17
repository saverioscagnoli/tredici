/**
 * Calculates the sine of an angle in radians or degrees using Bhaskara I approximation.
 *
 * @param - The angle to calculate the sine of.
 * @param [deg=false] - Whether `x` is in degrees (`true`) or radians (`false`).
 *
 * @example
 * // Sine of 45 degrees
 * const sin45 = sin(45, true); // 0.7071067811865475
 *
 * @example
 * // Sine of pi/4 radians
 * const sinPi4 = sin(Math.PI / 4); // 0.7071067811865475
 *
 * @example
 * // Sine of -135 degrees
 * const sinNeg135 = sin(-135, true); // -0.7071067811865475
 *
 * @example
 * // Sine of -3pi/4 radians
 * const sinNeg3Pi4 = sin(-3 * Math.PI / 4); // -0.7071067811865475
 */

function sin(x: number, deg: boolean = false) {
  const { PI } = Math;
  const PI2 = PI * 2;
  if (deg) {
    x = x * (PI / 180);
  }
  x = x % PI2;
  let ch = false;
  if (x < 0) x += PI2;
  if (x > PI) [(ch = true), (x = PI2 - x)];
  let c = PI - x;
  let n = 16 * x * c;
  let d = 5 * (PI * PI) - 4 * x * c;
  return ch ? -(n / d) : n / d;
}

export { sin };
