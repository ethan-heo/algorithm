const countUniqueValues = (values: number[]): number => {
    let result = values.length;
    let idx = 0;
    const maxLen = values.length;

    while (idx < maxLen) {
        const currentValue = values[idx++];
        const nextValue = values[idx];

        if (currentValue === nextValue) {
            result--;
        }
    }

    return result;
};

export default countUniqueValues;
