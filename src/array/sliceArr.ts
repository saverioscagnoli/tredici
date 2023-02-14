/**
 * Returns a sub-array from an array.
 *
 * @param arr - The array to slice.
 * @param [f=0] - The start index (inclusive) of the slice.
 * @param [t=arr.length] - The end index (exclusive) of the slice.
 *
 * @example
 * slice([1, 2, 3, 4], 1, 3);
 * // returns [2, 3]
 *
 * slice([1, 2, 3, 4]);
 * // returns [1, 2, 3, 4]
 *
 * slice([1, 2, 3, 4], 1, 1);
 * // returns [2]
 */

function sliceArr<T>(arr: T[], f: number = 0, t = arr.length) {
  if (f === t) return [arr[f]];
  let out: T[] = [];
  for (let i = f; i < t; i++) out.push(arr[i]);
  return out;
}

export { sliceArr };
