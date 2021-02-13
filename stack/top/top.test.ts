import { top } from "./top";

describe("top", () => {
    test("[6, 9, 5, 7, 4]", () => {
        const heights = [6, 9, 5, 7, 4];

        expect(top(heights)).toEqual([0, 0, 2, 2, 4]);
    });
    test("[1, 2, 3, 4, 5]", () => {
        const heights = [1, 2, 3, 4, 5];

        expect(top(heights)).toEqual([0, 0, 0, 0, 0]);
    });
    test("[5, 4, 3, 2, 1]", () => {
        const heights = [5, 4, 3, 2, 1];

        expect(top(heights)).toEqual([0, 1, 2, 3, 4]);
    });
});
