import { binary } from "./binary";

/**
 * Determines if an array includes a given element using binary search.
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
  return binary(arr, t) !== -1;
}

export { includes };
