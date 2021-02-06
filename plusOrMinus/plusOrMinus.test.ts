import { plusOrMinus } from "./plusOrMinus";

test("plusOrMinus", () => {
    expect(plusOrMinus(0, [2, 3, 1])).toBe(2);
    expect(plusOrMinus(-2, [2, 3, 1])).toBe(1);
    expect(plusOrMinus(9, [2, 3, 1])).toBe(0);
});
