export const getTargetNumCount = (
    numbers: number[],
    currentIdx: number,
    sum: number,
    arr: number[]
) => {
    if (currentIdx === numbers.length) {
        arr.push(sum);
        return;
    }

    getTargetNumCount(numbers, currentIdx + 1, sum + numbers[currentIdx], arr);
    getTargetNumCount(numbers, currentIdx + 1, sum - numbers[currentIdx], arr);
};

export const plusOrMinus = (targetNum: number, numbers: number[]) => {
    const sumNumArr: number[] = [];
    getTargetNumCount(numbers, 0, 0, sumNumArr);

    return sumNumArr.filter((sumNum) => sumNum === targetNum).length;
};
