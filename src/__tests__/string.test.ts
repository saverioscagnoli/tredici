import { expect, describe, it } from "@jest/globals";
import { capitalize, concat, lower, slice, split, trim, upper } from "../string";

/**
 * ####################
 *
 * Trim
 *
 * ####################
 */

describe("trim", function () {
  it("should remove whitespace from the beginning and end of a string", function () {
    const input = "   Hello, World!   ";
    const expectedOutput = "Hello, World!";
    const output = trim(input);
    expect(output).toEqual(expectedOutput);
  });

  it("should return an empty string for an all-whitespace input", function () {
    const input = "   \t\n";
    const expectedOutput = "";
    const output = trim(input);
    expect(output).toEqual(expectedOutput);
  });

  it("should return the input string for a string with no leading or trailing whitespace", function () {
    const input = "Hello, World!";
    const expectedOutput = "Hello, World!";
    const output = trim(input);
    expect(output).toEqual(expectedOutput);
  });

  it("should not modify the input string", function () {
    const input = "   Hello, World!   ";
    const originalInput = input;
    trim(input);
    expect(input).toEqual(originalInput);
  });
});

/**
 * ####################
 *
 * Split
 *
 * ####################
 */

describe("split", function () {
  it("should split a string into an array of strings based on the delimiter", function () {
    const input = "Hello, World!";
    const delimiter = ",";
    const expectedOutput = ["Hello", " World!"];
    const output = split(input, delimiter);
    expect(output).toEqual(expectedOutput);
  });

  it("should split a string into an array of strings based on the delimiter", function () {
    const input = "Hello, World!, asa,a  sd,  ' dsd";
    const delimiter = ",";
    const expectedOutput = ["Hello", " World!", " asa", "a  sd", "  ' dsd"];
    const output = split(input, delimiter);
    expect(output).toEqual(expectedOutput);
  });

  it("should return an array with the original string if the delimiter is not found", function () {
    const input = "Hello, World!";
    const delimiter = "|";
    const expectedOutput = ["Hello, World!"];
    const output = split(input, delimiter);
    expect(output).toEqual(expectedOutput);
  });

  it("should return an array with the original string if the delimiter is an empty string", function () {
    const input = "Hello, World!";
    const delimiter = "";
    const expectedOutput = ["Hello, World!"];
    const output = split(input, delimiter);
    expect(output).toEqual(expectedOutput);
  });

  it("should return an array with empty strings if the input is an empty string", function () {
    const input = "";
    const delimiter = ",";
    const expectedOutput = [""];
    const output = split(input, delimiter);
    expect(output).toEqual(expectedOutput);
  });
});

/**
 * ####################
 *
 * Concat
 *
 * ####################
 */

describe("concat", () => {
  it("concatenates a list of strings into a single string", () => {
    const result = concat("Hello", " ", "World!");
    expect(result).toBe("Hello World!");
  });
});

/**
 * ####################
 *
 * Upper
 *
 * ####################
 */

describe("toUpperCase", () => {
  it("converts a string to uppercase", () => {
    const result = upper("hello world");
    expect(result).toBe("HELLO WORLD");
  });
});

/**
 * ####################
 *
 * Lower
 *
 * ####################
 */

describe("lower", () => {
  it("converts all the alphabetic characters in a string to lowercase", () => {
    expect(lower("HELLO WORLD")).toBe("hello world");
  });

  it("returns an empty string for an empty input string", () => {
    expect(lower("")).toBe("");
  });

  it("returns the input string as-is if it contains no alphabetic characters", () => {
    expect(lower("123456")).toBe("123456");
  });

  it("returns the lowercased string even if the input string contains special characters", () => {
    expect(lower("hElLo wOrlD!@#$%^&*")).toBe("hello world!@#$%^&*");
  });
});

/**
 * ####################
 *
 * Slice
 *
 * ####################
 */

describe("slice", () => {
  it("returns a substring from a string", () => {
    const result = slice("hello world", 0, 5);
    expect(result).toBe("hello");
  });

  it("handles start index equal to end index", () => {
    const result = slice("hello world", 5, 5);
    expect(result).toBe(" ");
  });

  it("handles start index greater than end index", () => {
    const result = slice("hello world", 5, 2);
    expect(result).toBe("");
  });

  it("handles start and end index outside of string", () => {
    const result = slice("hello world", 15, 20);
    expect(result).toBe("");
  });
});

/**
 * ####################
 *
 * Capitalize
 *
 * ####################
 */

describe("capitalize", () => {
  it("capitalizes the first character of a string", () => {
    const result = capitalize("hello world");
    expect(result).toBe("Hello world");
  });

  it("handles empty strings", () => {
    const result = capitalize("");
    expect(result).toBe("");
  });

  it("handles strings with only one character", () => {
    const result = capitalize("a");
    expect(result).toBe("A");
  });

  it("handles strings that are already capitalized", () => {
    const result = capitalize("Hello world");
    expect(result).toBe("Hello world");
  });

  it("handles strings with special characters", () => {
    const result = capitalize("h$ell@o world");
    expect(result).toBe("H$ell@o world");
  });

  it("handles strings with numbers", () => {
    const result = capitalize("h3llo world");
    expect(result).toBe("H3llo world");
  });
});
