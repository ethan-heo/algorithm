/*
    선택정렬

    배열의 첫번째 요소부터 마지막 요소까지 반복해
    제일 작은 요소를 찾아 해당 인덱스의 값과 swap 해주는 방식.
*/
export const selectionSort = (arr: number[]) => {
    const len = arr.length;

    for (let i = 0; i < len; i++) {
        let min: number = i;

        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        [arr[i], arr[min]] = [arr[min], arr[i]];
    }

    return arr;
};
