const areThereDuplicates = (...values: (number | string)[]): boolean => {
    let point = 0;
    let samePoint = 0;
    const sortedValues = values.sort((a, b) => {
        const str1 = a.toString();
        const str2 = b.toString();

        return str1.charCodeAt(0) > str2.charCodeAt(0) ? 1 : -1;
    });

    for (let i = 1, len = sortedValues.length; i < len; i++) {
        if (sortedValues[point] !== sortedValues[i]) {
            sortedValues[++point] = sortedValues[i];
        } else {
            samePoint++;
        }
    }

    return samePoint > 0;
};

export default areThereDuplicates;
