import { includes } from "./includes";

/**
 * Returns the intersection of all elements from multiple arrays.
 *
 * @param arrs - The arrays to intersect.
 *
 * @example
 * cap([1, 2, 3], [2, 3, 4], [3, 4, 5]);
 * // returns [3]
 *
 * cap([1, 2, 3], [2, 3, 4], [3, 4, 5], [1, 2, 3]);
 * // returns [3]
 */

function cap(...arrs: any[][]) {
  let [s, l1] = [new Set(arrs[0]), arrs.length];
  for (let i = 1; i < l1; i++) {
    let arr = arrs[i];
    let [sArr, l2] = [Array.from(s), arr.length];

    for (let j = 0; j < l2; j++) {
      if (!includes(arr, sArr[j])) s.delete(sArr[j]);
    }
  }
  return [...s];
}

export { cap };
