/**
 * Filters an array based on a given condition, returning a new array
 * containing only the elements that pass the test implemented by the `fn` function.
 *
 * @param arr - The input array to filter.
 * @param fn - The function to test each element of the array.
 * @returns A new array containing only the elements that pass the test.
 *
 * @example
 * const arr = [1, 2, 3, 4, 5];
 *
 * const evens = filter(arr, x => x % 2 === 0);
 * console.log(evens); // [2, 4]
 *
 * const odds = filter(arr, x => x % 2 !== 0);
 * console.log(odds); // [1, 3, 5]
 */

function filter<T>(arr: T[], fn: (x: T) => boolean) {
  let o = [];
  let l = arr.length;
  for (let i = 0; i < l; i++) {
    let el = arr[i];
    if (fn(el)) o.push(el);
  }
  return o;
}

export { filter };
