import { expect, it } from "vitest";
import areThereDuplicates from "./areThereDuplicates";

it.each([
    [[1, 2, 3], false],
    [[1, 2, 3, 4, 5, 6, 7, "a", "b"], false],
    [[1, 2, 2], true],
    [["a", "b", "c", "a"], true],
])(`areThereDuplicates(%o) => %o`, (values, expected) => {
    expect(areThereDuplicates(...values)).toBe(expected);
});
