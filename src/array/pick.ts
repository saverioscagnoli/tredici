import { rng } from "../math";

/**
 * Returns a random element from an array.
 *
 * @template T
 * @param arr - The array to pick an element from.
 *
 * @example
 *
 * // Pick a random element from an array of numbers
 * const numbers = [1, 2, 3, 4, 5];
 * const randomElement = pick(numbers);
 *
 * // Pick a random element from an array of strings
 * const strings = ['foo', 'bar', 'baz'];
 * const randomString = pick(strings);
 */

function pick<T>(arr: T[]) {
  return arr[rng(0, arr.length - 1)];
}

export { pick };
