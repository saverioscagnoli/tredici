/**
 * Determines if all elements in an array pass a given test.
 *
 * @param arr - The array to search.
 * @param [fn=x => Boolean(x)] - The test function to apply to each element.
 * @returns `true` if all elements in `arr` pass `fn`, `false` otherwise.
 *
 * @example
 * all([2, 4, 6, 8], x => x % 2 === 0);
 * // returns true
 *
 * all([2, 4, 6, 7], x => x % 2 === 0);
 * // returns false
 */

function all<T>(arr: T[], fn: (x: T) => boolean = x => Boolean(x)) {
  for (let i = 0; i < arr.length; i++) if (!fn(arr[i])) return false;
  return true;
}

export { all };
