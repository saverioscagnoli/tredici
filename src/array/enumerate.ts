import { loop } from "./loop";

/**
 * Returns an array of index-value pairs for each element in the input array.
 *
 * See https://docs.python.org/3/library/functions.html#enumerate
 *
 * @param arr - The input array.
 * @param [s=0] - The start index for the output array.
 *
 * @example
 * const arr = ['a', 'b', 'c'];
 * const enumerated = enumerate(arr);
 * console.log(enumerated); // [[0, 'a'], [1, 'b'], [2, 'c']]
 *
 * const enumeratedWithStartIndex = enumerate(arr, 1);
 * console.log(enumeratedWithStartIndex); // [[1, 'a'], [2, 'b'], [3, 'c']]
 */

function enumerate<T>(arr: T[], s: number = 0): [number, T][] {
  let o: [number, T][] = [];
  loop(arr, (x, i) => o.push([i + s, x]));
  return o;
}

export { enumerate };
