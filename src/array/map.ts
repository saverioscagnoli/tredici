/**
 * Transforms elements of an array into a new array.
 *
 * @param arr - The input array to transform.
 * @param fn - The function to apply to each element of the array.
 * @example
 * const arr = [1, 2, 3];
 *
 * const double = map(arr, x => x * 2);
 * console.log(double); // [2, 4, 6]
 *
 * const square = map(arr, x => x * x);
 * console.log(square); // [1, 4, 9]
 */

function map<T>(arr: T[], fn: (x: T) => any): any[] {
  let o: any[] = [];
  let l = arr.length;
  for (let i = 0; i < l; i++) o.push(fn(arr[i]));
  return o;
}

export { map };
