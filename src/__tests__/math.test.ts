import { expect, describe, it, test } from "@jest/globals";
import { abs, cos, fact, sin, sqrt } from "../math";

/**
 * ####################
 *
 * Abs
 *
 * ####################
 */

describe("abs", () => {
  it("returns the absolute value of a positive number", () => {
    const result = abs(5);
    expect(result).toBe(5);
  });

  it("returns the absolute value of a negative number", () => {
    const result = abs(-5);
    expect(result).toBe(5);
  });

  it("returns the absolute value of 0", () => {
    const result = abs(0);
    expect(result).toBe(0);
  });

  expect(abs(-328947.478444)).toBe(328947.478444);
});

/**
 * ####################
 *
 * Sin
 *
 * ####################
 */

describe("sin", () => {
  it("calculates the sine of a number with a specified precision", () => {
    expect(sin(0)).toBe(0);
    expect(sin(Math.PI / 2)).toBe(1);
    expect(sin(Math.PI)).toBe(0);
    expect(sin((3 * Math.PI) / 2)).toBe(-1);
    expect(sin(2 * Math.PI)).toBe(0);
  });

  it("uses a default precision of 3 decimal places", () => {
    expect(sin(Math.PI / 4)).toBeCloseTo(0.707);
    expect(sin(Math.PI / 4)).toBeCloseTo(0.707, 2);
  });

  it("accepts a custom precision", () => {
    expect(sin(Math.PI / 4, 2)).toBeCloseTo(0.707, 2);
    expect(sin(Math.PI / 4, 2)).not.toBeCloseTo(0.707, 3);
  });
});

/**
 * ####################
 *
 * Cos
 *
 * ####################
 */

describe("cos", () => {
  it("calculates the cosine of a number with a specified precision", () => {
    expect(cos(0)).toBe(1);
    expect(cos(Math.PI / 2)).toBeCloseTo(0, 7);
    expect(cos(Math.PI)).toBe(-1);
    expect(cos(2 * Math.PI)).toBe(1);
  });

  it("uses a default precision of 7 decimal places", () => {
    expect(cos(Math.PI / 4)).toBeCloseTo(0.70710678);
  });

  it("accepts a custom precision", () => {
    expect(cos(Math.PI / 4, 6)).toBeCloseTo(0.70710678, 6);
  });
});

/**
 * ####################
 *
 * Fact
 *
 * ####################
 */

describe("fact", () => {
  it("calculates the factorial of a number", () => {
    expect(fact(0)).toBe(1);
    expect(fact(1)).toBe(1);
    expect(fact(2)).toBe(2);
    expect(fact(3)).toBe(6);
    expect(fact(4)).toBe(24);
  });
});

/**
 * ####################
 *
 * Sqrt
 *
 * ####################
 */

describe("sqrt", () => {
  it("should return the square root of a positive number", () => {
    expect(sqrt(4)).toBeCloseTo(2, 7);
    expect(sqrt(9)).toBeCloseTo(3, 7);
    expect(sqrt(16)).toBeCloseTo(4, 7);
    expect(sqrt(25)).toBeCloseTo(5, 7);
  });

  it("should return NaN for a negative number", () => {
    expect(sqrt(-4)).toBeNaN();
    expect(sqrt(-9)).toBeNaN();
    expect(sqrt(-16)).toBeNaN();
    expect(sqrt(-25)).toBeNaN();
  });

  it("should return the square root of a positive decimal number", () => {
    expect(sqrt(0.25)).toBeCloseTo(0.5, 7);
    expect(sqrt(0.81)).toBeCloseTo(0.9, 7);
  });
});
