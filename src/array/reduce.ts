import { loop } from "./loop";

/**
 * Reduces an array to a single value by iteratively calling the given `fn`
 * function on each element of the array and updating the `acc` accumulator.
 *

 * @param  arr - The input array to reduce.
 * @param  fn - The reduction function to call on each element of the array.
 * @param init - The initial value of the accumulator.
 * 
 * @example
 * 
 * const arr = [1, 2, 3, 4, 5];
 * const sum = reduce(arr, (acc, curr) => acc + curr, 0);
 * console.log(sum); //=> 15
 */

function reduce<T, U>(
  arr: T[],
  fn: (acc: U, currV: T, i?: number, arr?: T[]) => U,
  init: U
) {
  let acc = init;
  loop(arr, (x, i) => {
    acc = fn(acc, x, i, arr);
  });
  return acc;
}

export { reduce };
