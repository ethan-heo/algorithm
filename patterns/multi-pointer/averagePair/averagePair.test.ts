import { expect, it } from "vitest";
import averagePair from "./averagePair";

it.each([
    [[1, 2, 3], 2.5, true],
    [[1, 3, 3, 5, 6, 7, 10, 12, 19], 8, true],
    [[-1, 0, 3, 4, 5, 6], 4.1, false],
    [[], 4, false],
])(`averagePair(%o, %o) => %o`, (values, avg, expected) => {
    expect(averagePair(values, avg)).toBe(expected);
});
