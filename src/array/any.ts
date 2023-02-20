import { loop } from "./loop";

/**
 * Determines if at least one element in an array passes a given condition.
 *
 * @param arr - The array to iterate.
 * @param [fn=x => Boolean(x)] - The function that has to return a boolean.
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
  loop(arr, x => {
    if (fn(x)) return true;
  });
  return false;
}

export { any };
