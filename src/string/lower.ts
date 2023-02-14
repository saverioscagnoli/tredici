/**
 * Converts all the alphabetic characters in a string to lowercase.
 * @param str - The input string.
 * @example
 *
 * const result = lower("HELLO WORLD");
 * console.log(result); // "hello world"
 */

function lower(str: string) {
  let [r, l] = ["", str.length];
  for (let i = 0; i < l; i++) {
    let cc = str[i].charCodeAt(0);
    if (cc >= 65 && cc <= 90) {
      r += String.fromCharCode(cc + 32);
    } else r += str[i];
  }
  return r;
}

export { lower };
