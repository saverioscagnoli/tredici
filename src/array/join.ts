/**
 * Joins an array into a single string, using a separator.
 *
 * @param sep - The separator to use between the strings.
 * @param str - The array of strings to join.
 */

function join(sep: string, ...str: any[]): string {
  let r = "";
  for (let i = 0; i < str.length; i++) {
    r += str[i];
    if (i !== str.length - 1) {
      r += sep;
    }
  }
  return r;
}

export { join };
