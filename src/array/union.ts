import { includes } from "./includes";

/**
 * Returns the union of all elements from multiple arrays.
 *
 * @param arrs - The arrays to union.
 *
 * @example
 * union([1, 2, 3], [2, 3, 4], [3, 4, 5]);
 * // returns [1, 2, 3, 4, 5]
 *
 * union([1, 2, 3], [2, 3, 4], [3, 4, 5], [1, 2, 3]);
 * // returns [1, 2, 3, 4, 5]
 */

function union(...arrs: any[][]) {
  let o: any[][] = [];
  let l1 = arrs.length;
  for (let i = 0; i < l1; i++) {
    let l2 = arrs[i].length;
    for (let j = 0; j < l2; j++) {
      if (!includes(o, arrs[i][j])) o.push(arrs[i][j]);
    }
  }
  return o;
}

export { union };
