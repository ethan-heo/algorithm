import { expect, it } from "vitest";
import getMaxSubarraySum from "./get-max-subarray-sum";
import getMaxSubarraySumRefactor from "./get-max-subarray.sum.refactor";

it.each([
    [[1, 2, 5, 2, 8, 1, 5], 2, 10],
    [[1, 2, 5, 2, 8, 1, 5], 4, 17],
    [[4, 2, 1, 6], 1, 6],
    [[4, 2, 1, 6, 2], 4, 13],
    [[4, 2, 1, 6, 2], 4, 13],
    [[], 4, null],
])(`getMaxSubarraySum(%o, %i) => %o`, (arr, count, expected) => {
    expect(getMaxSubarraySum(arr, count)).toBe(expected);
});

it.each([
    [[1, 2, 5, 2, 8, 1, 5], 2, 10],
    [[1, 2, 5, 2, 8, 1, 5], 4, 17],
    [[4, 2, 1, 6], 1, 6],
    [[4, 2, 1, 6, 2], 4, 13],
    [[4, 2, 1, 6, 2], 4, 13],
    [[], 4, null],
])(`getMaxSubarraySumRefactor(%o, %i) => %o`, (arr, count, expected) => {
    expect(getMaxSubarraySumRefactor(arr, count)).toBe(expected);
});
