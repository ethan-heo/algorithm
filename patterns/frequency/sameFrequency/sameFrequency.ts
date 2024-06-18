const sameFrequency = (num1: number, num2: number): boolean => {
    const str1 = num1.toString();
    const str2 = num2.toString();

    if (str1.length !== str2.length) return false;

    const frequency: Record<string, number> = {};

    for (const char of str1) {
        frequency[char] = frequency[char] ? frequency[char] + 1 : 1;
    }

    for (const char of str2) {
        if (!frequency[char]) {
            return false;
        }

        frequency[char]--;
    }

    return true;
};

export default sameFrequency;
