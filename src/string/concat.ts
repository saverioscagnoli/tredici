import { join } from "../array";

/**
 * Concatenates a list of strings into a single string.
 *
 * @param str - The strings to be concatenated.
 *
 * @example
 * concat("Hello", " ", "World!"); // Returns "Hello World!"
 */

function concat(...str: string[]) {
  return join("", ...str);
}

export { concat };
