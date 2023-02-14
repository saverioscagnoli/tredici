import { abs } from "../math";

/**
 * Extracts a part of a string and returns a new string.
 * @param str - The input string.
 * @param [f=0] - The starting index of the slice.
 * @param [t=str.length] - The ending index of the slice.
 * @example
 *
 * const result = slice("hello world", 0, 5);
 * console.log(result); // "hello"
 */

function slice(str: string, f: number = 0, t = str.length) {
  if (f === t) return str[f];
  if (f > t || t > str.length) return "";
  [f, t] = [abs(f), abs(t)];
  let o = "";
  for (let i = f; i < t; i++) o += str[i];
  return o;
}

export { slice };
