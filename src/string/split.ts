/**
 * Splits a string into an array of substrings based on a specified delimiter.
 *
 * @param str - The string to split.
 * @param d - The delimiter to use for splitting the string.
 *
 * @example
 * const result = split("Hello, World!", ",");
 * console.log(result); // Output: ["Hello", " World!"]
 */

function split(str: string, d: string) {
  let o = [];
  let c = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === d) {
      o.push(c);
      c = "";
    } else {
      c += str[i];
    }
  }
  o.push(c);
  return o;
}

export { split };
