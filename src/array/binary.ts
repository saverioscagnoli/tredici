/**
 * Performs a binary search on a sorted array and returns the index of the target element, or -1 if it is not found.
 *
 * @param arr - The input sorted array.
 * @param t - The target element to search for.
 * @param [fn=(a, b) => (a === b ? 0 : a < b ? -1 : 1)] - A comparison function that returns 0 if a and b are equal, a negative number if a is less than b, and a positive number if a is greater than b.
 *
 * @example
 * const arr = [1, 2, 3, 4, 5];
 * const target = 3;
 * const result = binary(arr, target);
 * console.log(result); // 2
 */

function binary<T>(
  arr: T[],
  t: T,
  fn: (a: T, b: T) => number = (a, b) => (a === b ? 0 : a < b ? -1 : 1)
) {
  let [l, r] = [0, arr.length - 1];
  while (l <= r) {
    let m = Math.floor((l + r) * 0.5);
    let c = fn(arr[m], t);
    if (c === 0) r = m - 1;
    else if (c === -1) l = m + 1;
    else r = m - 1;
  }
  if (l < arr.length && fn(arr[l], t) === 0) return l;
  return -1;
}

export { binary };
