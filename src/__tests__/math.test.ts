import { expect, describe, it, test } from "@jest/globals";
import { abs, cos, fact, qrSqrt, rng, sin, sqrt, tan } from "../math";

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
  it("calculates the sine of a number", () => {
    expect(sin(0)).toBe(0);
    expect(sin(Math.PI / 2)).toBe(1);
    expect(sin(Math.PI)).toBe(0);
    expect(sin((3 * Math.PI) / 2)).toBe(-1);
    expect(sin(2 * Math.PI)).toBe(0);
    expect(sin(45, true)).toBeCloseTo(0.7, 1);
    expect(sin(270, true)).toBe(-1);
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
  test("returns the cosine of the given angle in radians", () => {
    expect(cos(Math.PI)).toBeCloseTo(-1);
    expect(cos(Math.PI / 2)).toBeCloseTo(0);
    expect(cos(Math.PI / 4)).toBeCloseTo(Math.sqrt(2) / 2);
  });

  test("returns the cosine of the given angle in degrees", () => {
    expect(cos(180, true)).toBeCloseTo(-1);
    expect(cos(90, true)).toBeCloseTo(0);
    expect(cos(45, true)).toBeCloseTo(Math.sqrt(2) / 2);
  });

  test("normalizes the angle to the range -(pi/2) to pi/2", () => {
    expect(cos((-3 * Math.PI) / 2)).toBeCloseTo(0);
    expect(cos(-Math.PI)).toBeCloseTo(-1);
    expect(cos(-Math.PI / 2)).toBeCloseTo(0);
    expect(cos(0)).toBeCloseTo(1);
    expect(cos(Math.PI / 2)).toBeCloseTo(0);
    expect(cos((3 * Math.PI) / 2)).toBeCloseTo(0);
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

/**
 * ####################
 *
 * qrSqrt
 *
 * ####################
 */

describe("invSqrt", () => {
  it("calculates the inverse square root of a given number", () => {
    expect(qrSqrt(4)).toBeCloseTo(0.5);
    expect(qrSqrt(16)).toBeCloseTo(0.25);
    expect(qrSqrt(100)).toBeCloseTo(0.1);
  });

  it("returns NaN if the input is negative or not a number", () => {
    expect(qrSqrt(-4)).toBeNaN();
  });
});

/**
 * ####################
 *
 * Tan
 *
 * ####################
 */

describe("tan function", () => {
  it("returns the correct value for angle 0", () => {
    expect(tan(0)).toBeCloseTo(0);
  });

  it("returns the correct value for angle pi/4 (45 degrees)", () => {
    expect(tan(Math.PI / 4)).toBeCloseTo(1);
  });

  it("returns the correct value for angle pi/3 (60 degrees)", () => {
    expect(tan(Math.PI / 3)).toBeCloseTo(Math.sqrt(3));
  });

  it("returns the correct value for angle pi/6 (30 degrees)", () => {
    expect(tan(Math.PI / 6)).toBeCloseTo(1 / Math.sqrt(3));
  });

  it("throws an error when the cosine is 0", () => {
    expect(() => tan(Math.PI / 2)).toThrow(
      "The cosine is 0, therefore the tangent is not defined."
    );
  });
});

/**
 * ####################
 *
 * Rng
 *
 * ####################
 */

describe("rng", () => {
  it("should return a random integer within the specified range", () => {
    const result = rng(5, 10);
    expect(result).toBeGreaterThanOrEqual(5);
    expect(result).toBeLessThanOrEqual(10);
  });

  it("should return a random integer within the default range if no parameters are specified", () => {
    const result = rng();
    expect(result).toBeGreaterThanOrEqual(Number.MIN_SAFE_INTEGER);
    expect(result).toBeLessThanOrEqual(Number.MAX_SAFE_INTEGER);
  });
});
