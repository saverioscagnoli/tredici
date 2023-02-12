import { expect, describe, it } from "@jest/globals";
import { split, trim } from "../string";

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
