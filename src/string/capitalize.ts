import { slice } from "../string";
import { concat } from "./concat";
import { upper } from "./upper";

/**
 * Capitalizes the first character of a string.
 *
 * @param str - The input string.
 * @example
 *
 * const result = capitalize("hello world");
 * console.log(result); // "Hello world"
 */

function capitalize(str: string) {
  if (!str.length) return "";
  return concat(upper(str[0]), str.length > 1 ? slice(str, 1) : "");
}

export { capitalize };
