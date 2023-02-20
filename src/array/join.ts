import { loop } from "./loop";

/**
 * Joins an array into a single string, using a separator.
 *
 * @param sep - The separator to use between the strings.
 * @param str - The array of strings to join.
 */

function join(sep: string, ...str: any[]): string {
  let r = "";
  loop(str, (c, i) => {
    r += c;
    if (i !== str.length - 1) {
      r += sep;
    }
  });
  return r;
}

export { join };
