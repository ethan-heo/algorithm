import { expect, it } from "vitest";
import validAnagram from "./validAnagram";
import validAnagramRefactor from "./validaAnagram.refactor";

const TEST_CASES = [
    ["test", "tset", true],
    ["", "", true],
    ["1t@e#st", "t@s##et", true],
    ["test", "set", false],
    ["", " ", false],
] as const;

it.each(TEST_CASES)(`validAnagrams(%s, %s) => %s`, (str1, str2, expected) => {
    expect(validAnagram(str1, str2)).toBe(expected);
});

it.each(TEST_CASES)(
    `validAnagramsRefactor(%s, %s) => %s`,
    (str1, str2, expected) => {
        expect(validAnagramRefactor(str1, str2)).toBe(expected);
    }
);
