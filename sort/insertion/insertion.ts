export const insertionSort = (arr: number[]) => {
    const len = arr.length;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i - j - 1] > arr[i - j]) {
                [arr[i - j - 1], arr[i - j]] = [arr[i - j], arr[i - j - 1]];
            } else {
                break;
            }
        }
    }

    return arr;
};
