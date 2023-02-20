import { includes } from "./includes";
import { loop } from "./loop";

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
  let s = new Set(arrs[0]);
  loop(arrs, a => {
    loop(a, el => {
      if (!a.includes(el)) s.delete(el);
    });
  });
  return [...s];
}

export { cap };
