import { parenthesis } from "./parenthesis";

describe("parenthesis", () => {
    test("(())()", () => {
        expect(parenthesis("(())()")).toBe(true);
    });

    test("((((", () => {
        expect(parenthesis("((((")).toBe(false);
    });
});
