/**
 * Determines if any elements in an array pass a given test.
 *
 * @template T
 * @param arr - The array to search.
 * @param [fn=x => Boolean(x)] - The test function to apply to each element.
 * @returns `true` if any element in `arr` passes `fn`, `false` otherwise.
 *
 * @example
 * any([1, 2, 3, 4], x => x % 2 === 0);
 * // returns true
 *
 * any([1, 3, 5, 7], x => x % 2 === 0);
 * // returns false
 */

function any<T>(arr: T[], fn: (x: T) => boolean = x => Boolean(x)) {
  for (let i = 0; i < arr.length; i++) if (fn(arr[i])) return true;
  return false;
}

export { any };
