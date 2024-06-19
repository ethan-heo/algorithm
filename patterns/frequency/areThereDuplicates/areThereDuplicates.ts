const areThereDuplicates = (...values: (number | string)[]): boolean => {
    const frequency: Record<string | number, number> = {};

    for (const value of values) {
        if (!frequency[value]) {
            frequency[value] = 1;
        } else {
            return true;
        }
    }

    return false;
};

export default areThereDuplicates;
