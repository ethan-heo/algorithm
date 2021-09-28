import { Stack } from "./stack";

describe("Stack", () => {
    let stack: Stack;

    beforeEach(() => {
        stack = new Stack();
    });

    test("push", () => {
        stack.push(1);
        stack.push(2);
        stack.push(3);

        expect(stack.toArray()).toEqual([1, 2, 3]);
    });

    test("pop", () => {
        stack.push(1);
        stack.push(2);
        stack.push(3);

        expect(stack.toArray()).toEqual([1, 2, 3]);
        expect(stack.pop()).toEqual(3);
        expect(stack.toArray()).toEqual([1, 2]);
    });

    test("peek", () => {
        stack.push(1);
        stack.push(2);
        stack.push(3);

        expect(stack.peek(1)).toEqual(3);
        expect(stack.peek(2)).toEqual(2);
        expect(stack.peek(3)).toEqual(1);
    });

    test("isEmpty", () => {
        expect(stack.isEmpty()).toBe(true);
        stack.push(1);
        expect(stack.isEmpty()).toBe(false);
    });
});
