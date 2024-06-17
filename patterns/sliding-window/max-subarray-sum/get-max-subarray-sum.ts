const getMaxSubarraySum = (arr: number[], count: number): number | null => {
    if (arr.length < count) return null;

    const tempArr: number[] = arr.splice(0, count);
    let max = sum(tempArr);

    for (const num of arr) {
        tempArr.splice(0, 1);
        tempArr.push(num);

        max = Math.max(max, sum(tempArr));
    }

    return max;

    function sum(arr: number[]) {
        return arr.reduce((acc, num) => acc + num);
    }
};

export default getMaxSubarraySum;
