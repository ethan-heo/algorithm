const areThereDuplicatesRefactor = (
    ...values: (number | string)[]
): boolean => {
    return new Set(values).size !== values.length;
};

export default areThereDuplicatesRefactor;
