/**
 * Trims leading and trailing whitespaces from a string.
 *
 * @param str - The string to trim.
 *
 * @example
 * const result = trim("   Hello, World!   ");
 * console.log(result); // Output: "Hello, World!"
 */

function trim(str: string) {
  return str.replace(/^\s+|\s+$/g, "");
}

export { trim };
