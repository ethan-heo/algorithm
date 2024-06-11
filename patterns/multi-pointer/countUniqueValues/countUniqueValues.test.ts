import { expect, it } from "vitest";
import countUniqueValues from "./countUniqueValues";
import countUniqueValuesRefactor from "./countUniqueValues.refator";

const TEST_CASES = [
    [[], 0],
    [[1, 2, 3, 4, 5, 6], 6],
    [[1, 1, 6], 2],
    [[-1, 0, 1, 1, 6], 4],
] as [number[], number][];

it.each(TEST_CASES)(`countUniqueValues(%o) => %i`, (values, expected) => {
    expect(countUniqueValues(values)).toBe(expected);
});

it.each(TEST_CASES)(
    `countUniqueValuesRefactor(%o) => %i`,
    (values, expected) => {
        expect(countUniqueValuesRefactor(values)).toBe(expected);
    }
);
