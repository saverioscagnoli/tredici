/**
 * Calculates the cosine of an angle in radians or degrees using the approximation of Bhaskara I.
 *
 * @param x - The angle in radians or degrees.
 * @param [deg=false] - Whether `x` is in degrees (default is radians).
 *
 * @example
 * // Calculate the cosine of 30 degrees
 * const cos30 = cos(30, true); // Returns 0.8660254037844387
 *
 * @example
 * // Calculate the cosine of pi/4 radians
 * const cosPiOver4 = cos(Math.PI / 4); // Returns 0.7071067811865476
 *
 * @see https://en.wikipedia.org/wiki/Bhaskara_I%27s_sine_approximation_formula
 */

function cos(x: number, deg: boolean = false) {
  const { PI } = Math;
  const PI2 = PI * 2;
  if (deg) {
    x = x * (Math.PI / 180);
  }
  x = x % PI2;
  let ch = false;
  if (x < -PI / 2) x += PI2;
  if (x > PI / 2) [(ch = true), (x -= PI)];
  let sq = x * x;
  let pi2 = 2 * Math.PI;
  let n = 20 * sq;
  let d = 4 * sq + pi2 * pi2;
  return ch ? -(1 - n / d) : 1 - n / d;
}

export { cos };
