/**
 * Converts a string to uppercase.
 *
 * @param str - The string to be converted to uppercase.
 *
 * @example
 * toUpperCase("hello world"); // Returns "HELLO WORLD"
 */
function upper(str: string) {
  let [r, l] = ["", str.length];
  for (let i = 0; i < l; i++) {
    let cc = str[i].charCodeAt(0);
    if (cc >= 97 && cc <= 122) {
      r += String.fromCharCode(cc - 32);
    } else r += str[i];
  }
  return r;
}

export { upper };
