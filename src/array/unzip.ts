import { map } from "./map";

/**
 * Transforms an array of arrays into separate arrays, where each new array contains elements from each of the original arrays at the same index.
 *
 * @param arr - The array of arrays to unzip.
 *
 * @example
 * unzip([[1, 4, 7], [2, 5, 8], [3, 6, 9]]);
 * // returns [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
 *
 * unzip([[1, 4, 6]]);
 * // returns [[1], [4], [6]]
 */

function unzip(arr: any[][]) {
  let length = Math.max(...map(arr, a => a.length));
  return Array.from({ length }, () => map(arr, x => x.shift()));
}

export { unzip };
