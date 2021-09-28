import { selectionSort } from "./selection";

test("selection sort", () => {
    const arr = [1, 5, 4, 2, 3];

    expect(selectionSort(arr)).toEqual([1, 2, 3, 4, 5]);
});
