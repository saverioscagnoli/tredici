import { expect, describe, it, test } from "@jest/globals";
import {
  all,
  any,
  binary,
  cap,
  chunk,
  deepcopy,
  filter,
  includes,
  map,
  reduce,
  sliceArr,
  union,
  unzip,
  zip
} from "../array";

/**
 * THESE TEST WERE WRITTEN BY ChatGPT BY OpenAI
 *
 * ####################
 *
 * Map
 *
 * ####################
 */

describe("map function", () => {
  test("it maps over an array of numbers and returns an array of square values", () => {
    const input = [1, 2, 3, 4, 5];
    const expectedOutput = [1, 4, 9, 16, 25];
    const square = (x: number) => x * x;
    expect(map(input, square)).toEqual(expectedOutput);
  });

  test("it maps over an array of strings and returns an array of length values", () => {
    const input = ["hello", "world", "how", "are", "you"];
    const expectedOutput = [5, 5, 3, 3, 3];
    const length = (x: string) => x.length;
    expect(map(input, length)).toEqual(expectedOutput);
  });

  test("it maps over an array of objects and returns an array of a specific property values", () => {
    const input = [
      { name: "John", age: 25 },
      { name: "Jane", age: 30 },
      { name: "Jim", age: 35 }
    ];
    const expectedOutput = ["John", "Jane", "Jim"];
    const name = (x: { name: string; age: number }) => x.name;
    expect(map(input, name)).toEqual(expectedOutput);
  });

  test("it returns an empty array when given an empty array as input", () => {
    const input: any[] = [];
    const expectedOutput: any[] = [];
    const identity = (x: any) => x;
    expect(map(input, identity)).toEqual(expectedOutput);
  });
});

/**
 * ####################
 *
 * Deepcopy
 *
 * ####################
 */

describe("deepcopy", () => {
  test("deepcopies an array of numbers", () => {
    const arr = [1, 2, 3, 4, 5];
    const copiedArr = deepcopy(arr);
    expect(copiedArr).toEqual(arr);
    expect(copiedArr).not.toBe(arr);
  });

  test("deepcopies an array of strings", () => {
    const arr = ["a", "b", "c"];
    const copiedArr = deepcopy(arr);
    expect(copiedArr).toEqual(arr);
    expect(copiedArr).not.toBe(arr);
  });

  test("deepcopies an array of objects", () => {
    const arr = [{ a: 1 }, { b: 2 }];
    const copiedArr = deepcopy(arr);
    expect(copiedArr).toEqual(arr);
    expect(copiedArr).not.toBe(arr);
  });

  test("deepcopies an array of arrays", () => {
    const arr = [
      [1, 2],
      [3, 4]
    ];
    const copiedArr = deepcopy(arr);
    expect(copiedArr).toEqual(arr);
    expect(copiedArr).not.toBe(arr);
  });

  test("deepcopies an array of nested objects and arrays", () => {
    const arr = [{ a: [1, 2] }, { b: [3, 4] }];
    const copiedArr = deepcopy(arr);
    expect(copiedArr).toEqual(arr);
    expect(copiedArr).not.toBe(arr);
  });
});

/**
 * ####################
 *
 * Filter
 *
 * ####################
 */

describe("filter", () => {
  it("filters an array based on a given function", () => {
    const arr = [1, 2, 3, 4, 5];
    const isOdd = (x: number) => x % 2 !== 0;
    const result = filter(arr, isOdd);

    expect(result).toEqual([1, 3, 5]);
  });

  it("handles an empty array", () => {
    const arr: number[] = [];
    const isOdd = (x: number) => x % 2 !== 0;
    const result = filter(arr, isOdd);

    expect(result).toEqual([]);
  });

  it("returns an empty array if the filter function returns false for all elements", () => {
    const arr = [2, 4, 6, 8];
    const isOdd = (x: number) => x % 2 !== 0;
    const result = filter(arr, isOdd);

    expect(result).toEqual([]);
  });

  it("filters an array of strings based on a given function", () => {
    const arr = ["hello", "world", "goodbye", "universe"];
    const isLongWord = (x: string) => x.length > 5;
    const result = filter(arr, isLongWord);

    expect(result).toEqual(["goodbye", "universe"]);
  });

  it("filters an array of objects based on a given function", () => {
    const arr = [
      { name: "Alice", age: 30 },
      { name: "Bob", age: 40 },
      { name: "Charlie", age: 50 },
      { name: "David", age: 60 }
    ];
    const isOld = (x: { name: string; age: number }) => x.age >= 50;
    const result = filter(arr, isOld);

    expect(result).toEqual([
      { name: "Charlie", age: 50 },
      { name: "David", age: 60 }
    ]);
  });
});

/**
 * ####################
 *
 * Reduce
 *
 * ####################
 */

describe("reduce function", () => {
  test("reduces an array of numbers to a sum", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = reduce(arr, (acc, curr) => acc + curr, 0);
    expect(result).toEqual(15);
  });

  test("reduces an array of strings to a concatenated string", () => {
    const arr = ["hello", "world"];
    const result = reduce(arr, (acc, curr) => acc + curr, "");
    expect(result).toEqual("helloworld");
  });

  test("reduces an array of objects to a single object with properties merged", () => {
    const arr = [
      { a: 1, b: 2 },
      { c: 3, d: 4 },
      { e: 5, f: 6 }
    ];
    const result = reduce(arr, (acc, curr) => ({ ...acc, ...curr }), {});
    expect(result).toEqual({ a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 });
  });

  test("handles an empty array and returns the initial value", () => {
    const arr: number[] = [];
    const result = reduce(arr, (acc, curr) => acc + curr, 0);
    expect(result).toEqual(0);
  });
});

/**
 * ####################
 *
 * Binary
 *
 * ####################
 */

describe("binarySearch", () => {
  it("should correctly search for an element in an array of numbers", () => {
    const array = [1, 2, 3, 4, 5];
    const target = 4;

    const result = binary(array, target);

    expect(result).toBe(3);
  });

  it("should correctly search for an element in an array of strings", () => {
    const array = ["apple", "banana", "cherry", "date"];
    const target = "cherry";

    const result = binary(array, target);

    expect(result).toBe(2);
  });

  it("should correctly search for an element in an array of objects", () => {
    interface Person {
      name: string;
      age: number;
    }

    const array: Person[] = [
      { name: "Alice", age: 30 },
      { name: "Bob", age: 40 },
      { name: "Charlie", age: 35 },
      { name: "David", age: 25 }
    ];
    const target = { name: "Charlie", age: 35 };

    const compareFn = (a: Person, b: Person) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    };

    const result = binary(array, target, compareFn);

    expect(result).toBe(2);
  });

  it("should return -1 when the target element is not found", () => {
    const array = [1, 2, 3, 4, 5];
    const target = 6;

    const result = binary(array, target);

    expect(result).toBe(-1);
  });
});

/**
 * ####################
 *
 * Includes
 *
 * ####################
 */

describe("array.includesUsingBinarySearch", () => {
  it("should correctly find an element in an array of numbers", () => {
    const array = [1, 2, 3, 4, 5];
    const target = 4;

    const result = includes(array, target);

    expect(result).toBe(true);
  });

  it("should correctly find an element in an array of strings", () => {
    const array = ["apple", "banana", "cherry", "date"];
    const target = "cherry";

    const result = includes(array, target);

    expect(result).toBe(true);
  });

  it("should return false when the target element is not found", () => {
    const array = [1, 2, 3, 4, 5];
    const target = 6;

    const result = includes(array, target);

    expect(result).toBe(false);
  });
});

/**
 * ####################
 *
 * All
 *
 * ####################
 */

describe("all", () => {
  test("returns true if all elements in the array pass the test", () => {
    const arr = [1, 2, 3, 4];
    const fn = (x: number) => x > 0;
    expect(all(arr, fn)).toBe(true);
  });

  test("returns false if any element in the array does not pass the test", () => {
    const arr = [1, 2, 3, 4];
    const fn = (x: number) => x > 2;
    expect(all(arr, fn)).toBe(false);
  });

  test("returns true if all elements in the array are truthy", () => {
    const arr = [1, "string", true, {}, []];
    expect(all(arr)).toBe(true);
  });

  test("returns false if any element in the array is falsy", () => {
    const arr = [1, "string", true, {}, [], 0];
    expect(all(arr)).toBe(false);
  });
});

/**
 * ####################
 *
 * Any
 *
 * ####################
 */

describe("any", () => {
  it("should return true if any element in the array passes the test", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = any(arr, x => x % 2 === 0);
    expect(result).toBe(true);
  });

  it("should return false if no element in the array passes the test", () => {
    const arr = [1, 3, 5, 7, 9];
    const result = any(arr, x => x % 2 === 0);
    expect(result).toBe(false);
  });

  it("should return true if any element in the array is truthy", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = any(arr);
    expect(result).toBe(true);
  });

  it("should return false if all elements in the array are falsy", () => {
    const arr = [0, false, "", undefined, null];
    const result = any(arr);
    expect(result).toBe(false);
  });

  it("should return false if the array is empty", () => {
    const arr: number[] = [];
    const result = any(arr, x => x % 2 === 0);
    expect(result).toBe(false);
  });
});

/**
 * ####################
 *
 * Slice
 *
 * ####################
 */

describe("slice function", () => {
  it("should return a portion of the input array", () => {
    const input = [1, 2, 3, 4, 5];
    const output = sliceArr(input, 1, 4);

    expect(output).toEqual([2, 3, 4]);
  });

  it("should return the entire input array when no from and to indices are passed", () => {
    const input = [1, 2, 3, 4, 5];
    const output = sliceArr(input);

    expect(output).toEqual(input);
  });

  it("should return an empty array when the input array is empty", () => {
    const input: number[] = [];
    const output = sliceArr(input);

    expect(output).toEqual([]);
  });

  it("should return an array with only one element when from and to indices are the same", () => {
    const input = [1, 2, 3, 4, 5];
    const output = sliceArr(input, 2, 2);

    expect(output).toEqual([3]);
  });

  it("should return an empty array when the to index is less than the from index", () => {
    const input = [1, 2, 3, 4, 5];
    const output = sliceArr(input, 2, 1);

    expect(output).toEqual([]);
  });
});

/**
 * ####################
 *
 * Chunk
 *
 * ####################
 */

describe("chunk", () => {
  it("should chunk an array into smaller arrays of specified size", () => {
    const input = [1, 2, 3, 4, 5];
    const expectedOutput = [[1, 2], [3, 4], [5]];
    expect(chunk(input, 2)).toEqual(expectedOutput);
  });

  it("should chunk an array into single element arrays if the size is not specified", () => {
    const input = [1, 2, 3, 4, 5];
    const expectedOutput = [[1], [2], [3], [4], [5]];
    expect(chunk(input)).toEqual(expectedOutput);
  });

  it("should chunk an array into smaller arrays of specified size even if the size is greater than the array length", () => {
    const input = [1, 2, 3, 4, 5];
    const expectedOutput = [[1, 2, 3, 4, 5]];
    expect(chunk(input, 10)).toEqual(expectedOutput);
  });

  it("should return an empty array if the input array is empty", () => {
    expect(chunk([], 2)).toEqual([]);
  });
});

/**
 * ####################
 *
 * Union
 *
 * ####################
 */

describe("union", () => {
  it("should return an array containing all unique elements from the input arrays", () => {
    expect(union([1, 2, 3], [3, 4, 5], [5, 6, 7])).toEqual([
      1, 2, 3, 4, 5, 6, 7
    ]);
    expect(union([1, 1, 2, 2], [3, 3, 4, 4])).toEqual([1, 2, 3, 4]);
    expect(union([1, 2, 3], [4, 5, 6], [7, 8, 9])).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9
    ]);
  });

  it("should work for arrays of different types", () => {
    expect(union([1, 2, 3], ["one", "two", "three"], [true, false])).toEqual([
      1,
      2,
      3,
      "one",
      "two",
      "three",
      true,
      false
    ]);
  });

  it("should return an empty array if all input arrays are empty", () => {
    expect(union([], [], [])).toEqual([]);
  });
});

/**
 * ####################
 *
 * Cap
 *
 * ####################
 */

describe("cap", () => {
  it("should return an empty array if all arrays are empty", () => {
    const result = cap([], [], []);
    expect(result).toEqual([]);
  });

  it("should return an array of elements that are common to all arrays", () => {
    const result = cap([1, 2, 3, 4, 5], [2, 4, 6, 8, 10], [4, 8, 12, 16, 20]);
    expect(result).toEqual([4]);
  });

  it("should return an array of elements that are common to all arrays and preserve the order of elements", () => {
    const result = cap(
      [1, 2, 3, 4, 5],
      [2, 4, 6, 8, 10, 3],
      [4, 8, 12, 16, 20, 2, 3]
    );
    expect(result).toEqual([2, 3, 4]);
  });

  it("should return an array of elements that are common to all arrays with different data types", () => {
    const result = cap(
      [1, 2, 3, 4, "5"],
      [2, 4, 6, 8, "10"],
      [4, 8, 12, 16, "20"]
    );
    expect(result).toEqual([4]);
  });

  it("should return an array of unique elements that are common to all arrays", () => {
    const result = cap(
      [1, 2, 2, 3, 4, 5],
      [2, 2, 4, 6, 8, 10],
      [4, 8, 12, 16, 20, 2]
    );
    expect(result).toEqual([2, 4]);
  });
});

/**
 * ####################
 *
 * Zip
 *
 * ####################
 */

describe("zip", () => {
  it("should return an empty array when given no arrays", () => {
    expect(zip()).toEqual([]);
  });

  it("should return an array of arrays where each inner array consists of the corresponding elements of the input arrays", () => {
    expect(zip([1, 2, 3], [4, 5, 6], [7, 8, 9])).toEqual([
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9]
    ]);
  });

  it("should only include as many inner arrays as the length of the shortest input array", () => {
    expect(zip([1, 2, 3], [4, 5], [7, 8, 9])).toEqual([
      [1, 4, 7],
      [2, 5, 8]
    ]);
  });

  it("should work with input arrays of different types", () => {
    expect(zip(["a", "b", "c"], [1, 2, 3], [true, false, true])).toEqual([
      ["a", 1, true],
      ["b", 2, false],
      ["c", 3, true]
    ]);
  });
});

/**
 * ####################
 *
 * Unzip
 *
 * ####################
 */

describe("unzip", () => {
  it("should return the unzipped version of the given 2D array", () => {
    const arr = [
      [1, 2, 3],
      ["a", "b", "c"],
      [true, false, true]
    ];
    const expected = [
      [1, "a", true],
      [2, "b", false],
      [3, "c", true]
    ];
    expect(unzip(arr)).toEqual(expected);
  });

  it("should return the unzipped version of the given 2D array where some inner arrays are of different lengths", () => {
    const arr = [
      [1, 2, 3],
      ["a", "b"],
      [true, false, true]
    ];
    const expected = [
      [1, "a", true],
      [2, "b", false],
      [3, undefined, true]
    ];
    expect(unzip(arr)).toEqual(expected);
  });

  it("should return an empty array if the given 2D array is empty", () => {
    const arr: any[][] = [];
    expect(unzip(arr)).toEqual([]);
  });
});
