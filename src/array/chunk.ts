import { loop } from "./loop";
import { sliceArr } from "./sliceArr";

/**
 * Splits an array into chunks of a given size.
 *
 * @param arr - The array to chunk.
 * @param [s=1] - The size of each chunk.
 *
 * @example
 * chunk([1, 2, 3, 4, 5], 2);
 * // returns [[1, 2], [3, 4], [5]]
 *
 * chunk([1, 2, 3, 4, 5], 3);
 * // returns [[1, 2, 3], [4, 5]]
 */

function chunk<T>(arr: T[], s: number = 1) {
  let o = [];
  loop(arr, (_, i) => o.push(sliceArr(arr, i, i + s)));
  return o;
}

export { chunk };
