import * as array from "./array";
import * as string from "./string";
import * as misc from "./misc";
import * as math from "./math";

export default Object.assign({}, array, string, misc, math) as typeof array &
  typeof string &
  typeof misc &
  typeof math;

export * from "./array";
export * from "./string";
export * from "./misc";
export * from "./math";
