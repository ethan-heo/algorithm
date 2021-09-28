import { fibonacci, fibonacciMemoization } from "./fibonacci";

describe("fibonacci", () => {
    const memo = {
        1: 1,
        2: 1,
    };

    test("common", () => {
        expect(fibonacci(20)).toBe(6765);
    });

    test("memo", () => {
        expect(fibonacciMemoization(100, memo)).toBe(354224848179262000000);
    });
});
