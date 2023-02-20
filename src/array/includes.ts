import { any } from "./any";

/**
 * Determines if an array includes a given element.
 *
 * @param arr - The array to search.
 * @param t - The element to search for.
 *
 * @example
 * includes([1, 2, 3, 4], 2);
 * // returns true
 *
 * includes([1, 2, 3, 4], 5);
 * // returns false
 */

function includes<T>(arr: T[], t: T) {
  return any(arr, x => x === t);
}

export { includes };
