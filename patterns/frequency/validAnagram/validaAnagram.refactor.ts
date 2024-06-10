const validAnagramRefactor = (str1: string, str2: string): boolean => {
    if (str1.length !== str2.length) {
        return false;
    }

    const frequency: Record<string, number> = {};

    for (const word of str1) {
        if (!frequency[word]) {
            frequency[word] = 0;
        }

        frequency[word] += 1;
    }

    for (const word of str2) {
        const code = word.charCodeAt(0);

        if (code < 97 || code > 122) {
            continue;
        }

        if (!frequency[word]) {
            return false;
        }

        frequency[word]--;
    }

    return true;
};

export default validAnagramRefactor;
