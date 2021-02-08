import { sortBubble } from "./bubble";

test("bubble sort", () => {
    const arr = [1, 3, 5, 2, 6];
    expect(sortBubble(arr)).toEqual([1, 2, 3, 5, 6]);
});
