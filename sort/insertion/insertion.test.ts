import { insertionSort } from "./insertion";

test("insertion sort", () => {
    const arr = [1, 5, 3, 2, 4];

    expect(insertionSort(arr)).toEqual([1, 2, 3, 4, 5]);
});
