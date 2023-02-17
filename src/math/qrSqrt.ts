/**
 * Calculates the inverse square root of a given number using the Fast Inverse Square Root algorithm,
 * famously used in the Quake III Arena video game by John Carmack and his team at id Software.
 *
 * @param x - The input number.
 * @example
 *
 * // Returns 0.5
 * const result = invSqrt(4);
 */

function qrSqrt(x: number) {
  if (x & (1 << 63)) return NaN;
  let b = new ArrayBuffer(Float32Array.BYTES_PER_ELEMENT);
  let fw = new Float32Array(b);
  let iw = new Uint32Array(b);
  let x2 = x * 0.5;
  fw[0] = x;
  iw[0] = 0x5f3759df - (iw[0] >> 1);
  let y = fw[0];
  y = y * (1.5 - x2 * y * y);

  return y;
}

export { qrSqrt };
