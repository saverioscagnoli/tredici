/**
 * Limits the frequency of function calls.
 *
 * @param fn - The function to be throttled.
 * @param t - The minimum time in milliseconds between function calls.
 *
 * @example
 * let count = 0;
 * const increment = () => {
 *   count += 1;
 *   console.log(count);
 * };
 *
 * const throttleIncrement = throttle(increment, 1000);
 * setInterval(throttleIncrement, 500);
 *
 * // logs:
 * // 1
 * // 2
 * // ...
 */

function throttle(fn: Function, t: number) {
  let lc = 0;
  return function (this: any, ...argc: any[]) {
    let st = Date.now();
    if (st - lc < t) return;
    lc = st;
    fn.apply(this, argc);
  };
}

export { throttle };
