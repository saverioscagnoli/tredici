/**
 * Debounces the function `fn` so that it will only be called once
 * `ms` milliseconds have passed since the last call to `fn`.
 *
 * @param fn - The function to debounce.
 * @param  ms - The number of milliseconds to wait before calling `fn`.
 * @example
 * let counter = 0;
 * function incrementCounter() {
 *   counter++;
 *   console.log(counter);
 * }
 *
 * const debouncedIncrementCounter = debounce(incrementCounter, 500);
 *
 * debouncedIncrementCounter();
 * debouncedIncrementCounter();
 * debouncedIncrementCounter();
 *
 * // After 500ms have passed, `counter` will have only been incremented once.
 * // Output: 1
 */

function debounce(fn: Function, ms: number) {
  let t: NodeJS.Timer | undefined;
  return function (this: any, ...argc: any[]) {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, argc), ms);
  };
}

export { debounce };
