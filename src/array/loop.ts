/**
 * Loops over an array and calls a function for each element.
 *
 * @param arr - The input array to loop over.
 * @param fn - The function to call for each element.
 *
 * @example
 * const arr = [1, 2, 3];
 *
 * loop(arr, (x, i) => {
 *   console.log(`arr[${i}] = ${x}`);
 * });
 * // Output:
 * // arr[0] = 1
 * // arr[1] = 2
 * // arr[2] = 3
 */

function loop<T>(arr: T[], fn: (x: T, i: number) => void) {
  let l = arr.length;
  for (let i = 0; i < l; i++) fn(arr[i], i);
}

export { loop };
