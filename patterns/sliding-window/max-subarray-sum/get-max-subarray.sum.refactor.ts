const getMaxSubarraySumRefactor = (
    arr: number[],
    count: number
): number | null => {
    if (arr.length < count) return null;

    let max = arr.slice(0, count).reduce((acc, num) => acc + num);
    let temp = max;

    for (let i = count, len = arr.length; i < len; i++) {
        temp = temp - arr[i - count] + arr[i];
        max = Math.max(max, temp);
    }

    return max;
};

export default getMaxSubarraySumRefactor;
