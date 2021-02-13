/**
 * merge 정렬
 *
 * 사전에 arr1, arr2가 모두 오름차순으로 정렬이 되어있어야 한다.
 * arr1, arr2의 포인터의 값을 서로 비교하며
 * 작은 숫자를 새로운 배열에 추가한다.
 * 그리고 배열의 수 보다 작은 포인터는 해당 포인터 부터 마지막 요소까지 추가한다.
 *
 * 정렬과 합치는 걸 같이하고 싶다면 "분할 정복"을 해야한다.
 * 배열을 더 이상 나눌 수 없는 부분까지 나눈 후 각 배열을 비교해서 합치는 작업을 수행한다.
 */

export const merge = (arr1: number[], arr2: number[]) => {
    let arr: number[] = [];
    let arr1_len = arr1.length;
    let arr2_len = arr2.length;
    let arr1_pointer = 0;
    let arr2_pointer = 0;

    while (arr1_pointer < arr1_len && arr2_pointer < arr2_len) {
        let item: number;

        if (arr1[arr1_pointer] < arr2[arr2_pointer]) {
            item = arr1[arr1_pointer++];
        } else {
            item = arr2[arr2_pointer++];
        }

        arr.push(item);
    }

    if (arr1_pointer === arr1_len) {
        arr = arr.concat(...arr2.slice(arr2_pointer, arr2_len));
    } else {
        arr = arr.concat(...arr1.slice(arr1_pointer, arr1_len));
    }

    return arr;
};

export const mergeSort = (arr: number[]): number[] => {
    if (arr.length === 1) {
        return arr;
    }

    const divide = Math.floor(arr.length / 2);

    const arr1 = mergeSort(arr.slice(0, divide));
    const arr2 = mergeSort(arr.slice(divide, arr.length));

    return merge(arr1, arr2);
};
