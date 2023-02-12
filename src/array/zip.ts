import { map } from "./map";

/**
 * Combines multiple arrays into an array of arrays, where each subarray contains elements from each of the original arrays at the same index.
 *
 * @param arrs - The arrays to zip.
 *
 * @example
 * zip([1, 2, 3], [4, 5, 6], [7, 8, 9]);
 * // returns [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
 *
 * zip([1, 2, 3], [4, 5], [6]);
 * // returns [[1, 4, 6]]
 */

function zip(...arrs: any[][]) {
  if (!arrs.length) return [];
  let out = [];
  for (let i = 0; i < Math.min(...map(arrs, a => a.length)); i++)
    out.push(map(arrs, a => a[i]));
  return out;
}

export { zip };
