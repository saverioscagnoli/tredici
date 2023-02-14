/**
 * XORs two boolean values and returns the result.
 *
 * @param a - The first boolean value to XOR.
 * @param b - The second boolean value to XOR.
 */

function xor(a: boolean, b: boolean) {
  return (a && !b) || (!a && b);
}

export { xor };
