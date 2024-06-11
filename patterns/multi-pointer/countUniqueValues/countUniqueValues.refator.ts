// 공간을 조금 더 효과적으로 사용하는 방식
const countUniqueValuesRefactor = (values: number[]): number => {
    if (values.length === 0) return 0;

    let pointer = 0;

    for (let i = 1; i < values.length; i++) {
        if (values[pointer] !== values[i]) {
            pointer++;
            values[pointer] = values[i];
        }
    }

    return pointer + 1;
};

export default countUniqueValuesRefactor;
