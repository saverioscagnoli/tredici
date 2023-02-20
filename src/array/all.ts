import { loop } from "./loop";

/**
 * Determines if all element in an array passes a given condition.
 *
 * @param arr  - The array to iterate.
 * @param [fn=x => Boolean(x)] - The test function to apply to each element.
 * @returns `true` if all elements in `arr` passe `fn`, `false` otherwise.
 *
 * @example
 * all([2, 4, 6, 8], x => x % 2 === 0);
 * // returns true
 *
 * all([2, 4, 6, 7], x => x % 2 === 0);
 * // returns false
 */

function all<T>(arr: T[], fn: (x: T) => boolean = x => Boolean(x)): boolean {
  loop(arr, x => {
    if (!fn(x)) return false;
  });
  return true;
}

export { all };
