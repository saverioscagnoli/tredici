const loop = <T>(arr: T[], lis: (x: T, i: number) => void) => {
  for (let i = 0; i < arr.length; i++) {
    lis(arr[i], i);
  }
};

const map = <T>(arr: T[], lis: (x: T) => any): any[] => {
  let out = [];
  for (let i = 0; i < arr.length; i++) out.push(lis(arr[i]));
  return out;
};

const enumerate = <T>(arr: T[]) => {
  let out = [];
  for (let i = 0; i < arr.length; i++) out.push(arr[i], i);
  return out;
};

const deepcopy = <T>(arr: T[]) => map(arr, x => x);

const filter = <T>(arr: T[], fn: (x: T) => boolean) => {
  let out = [];
  for (let i = 0; i < arr.length; i++) if (fn(arr[i])) out.push(arr[i]);
  return out;
};

const reduce = <T, U>(
  arr: T[],
  fn: (acc: U, currV: T, currI: number, arr: T[]) => U,
  init: U
) => {
  let acc = init;
  for (let i = 0; i < arr.length; i++) acc = fn(acc, arr[i], i, arr);
  return acc;
};

const binary = <T>(
  arr: T[],
  t: T,
  fn: (a: T, b: T) => number = (a, b) => (a === b ? 0 : a < b ? -1 : 1)
) => {
  let [l, r] = [0, arr.length - 1];
  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    let c = fn(arr[m], t);
    if (c === 0) {
      r = m - 1;
    } else if (c === -1) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  if (l < arr.length && fn(arr[l], t) === 0) return l;

  return -1;
};

const includes = <T>(arr: T[], t: T) => binary(arr, t) !== -1;

const all = <T>(arr: T[], fn: (x: T) => boolean = x => Boolean(x)) => {
  for (let i = 0; i < arr.length; i++) if (!fn(arr[i])) return false;
  return true;
};

const any = <T>(arr: T[], fn: (x: T) => boolean = x => Boolean(x)) => {
  for (let i = 0; i < arr.length; i++) if (fn(arr[i])) return true;
  return false;
};

const slice = <T>(arr: T[], f = 0, t = arr.length) => {
  if (f === t) return [arr[f]];
  let out: T[] = [];
  for (let i = f; i < t; i++) out.push(arr[i]);
  return out;
};

const chunk = <T>(arr: T[], size = 1) => {
  let out = [];
  for (let i = 0; i < arr.length; i += size) {
    out.push(slice(arr, i, i + size));
  }
  return out;
};

const union = (...arrs: any[][]) => {
  let out: any[][] = [];
  for (let i = 0; i < arrs.length; i++) {
    for (let j = 0; j < arrs[i].length; j++) {
      if (!includes(out, arrs[i][j])) out.push(arrs[i][j]);
    }
  }
  return out;
};

const cap = (...arrs: any[][]) => {
  let s = new Set(arrs[0]);
  for (let i = 1; i < arrs.length; i++) {
    let arr = arrs[i];
    let sArr = Array.from(s);
    for (let j = 0; j < sArr.length; j++)
      if (!arr.includes(sArr[j])) s.delete(sArr[j]);
  }
  return [...s];
};

const zip = (...arrs: any[][]) => {
  if (!arrs.length) return [];
  let out = [];
  for (let i = 0; i < Math.min(...map(arrs, a => a.length)); i++)
    out.push(map(arrs, a => a[i]));
  return out;
};

const unzip = (arr: any[][]) => {
  let length = Math.max(...map(arr, a => a.length));
  return Array.from({ length }, () => map(arr, x => x.shift()));
};

export {
  loop,
  map,
  enumerate,
  deepcopy,
  filter,
  reduce,
  binary,
  includes,
  all,
  any,
  slice,
  chunk,
  union,
  cap,
  zip,
  unzip
};
