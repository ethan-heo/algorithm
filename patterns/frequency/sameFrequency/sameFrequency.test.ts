import { expect, it } from "vitest";
import sameFrequency from "./sameFrequency";

it.each([
    [123, 231, true],
    [123, 2311, false],
    [182, 281, true],
    [34, 14, false],
    [3589578, 5879385, true],
    [22, 222, false],
])(`sameFrequency(%o, %o) => %o`, (num1, num2, expected) => {
    expect(sameFrequency(num1, num2)).toBe(expected);
});
