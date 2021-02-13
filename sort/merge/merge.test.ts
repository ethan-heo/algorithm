import { mergeSort, merge } from "./merge";

test("merge", () => {
    const arr1 = [1, 2, 3, 5];
    const arr2 = [4, 6, 7, 8];

    expect(merge(arr1, arr2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});

test("merge sort", () => {
    const arr = [1, 4, 3, 5, 2, 7, 6];

    expect(mergeSort(arr)).toEqual([1, 2, 3, 4, 5, 6, 7]);
});
