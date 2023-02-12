import { map } from "./map";

/**
 * Makes a deep copy of an array.
 *
 * @param arr - The input array to make a deep copy of.
 *
 * @example
 * const arr = [1, 2, 3];
 * const copy = deepcopy(arr);
 *
 * console.log(arr === copy); // false
 * console.log(arr[0] === copy[0]); // true
 */
function deepcopy<T>(arr: T[]) {
  return map(arr, x => x);
}

export { deepcopy };
