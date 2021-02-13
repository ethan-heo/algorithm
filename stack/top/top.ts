import { Stack } from "../stack";

export const top = (heights: number[]) => {
    const stack = new Stack();
    const len = heights.length;

    for (let i = 0; i < len; i++) {
        let receiver = 0;

        for (let j = i; j >= 0; j--) {
            if (heights[j] > heights[i]) {
                receiver = j + 1;
                break;
            }
        }

        stack.push(receiver);
    }

    return stack.toArray();
};
