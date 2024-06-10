const validAnagram = (str1: string, str2: string): boolean => {
    if (str1.length !== str2.length) {
        return false;
    }

    const frequency1: Record<string, number> = {};
    const frequency2: Record<string, number> = {};

    for (const word of str1) {
        const code = word.charCodeAt(0);

        if (code < 97 || code > 122) {
            continue;
        }

        if (!frequency1[word]) {
            frequency1[word] = 0;
        }

        frequency1[word] += 1;
    }

    for (const word of str2) {
        const code = word.charCodeAt(0);

        if (code < 97 || code > 122) {
            continue;
        }

        if (!frequency2[word]) {
            frequency2[word] = 0;
        }

        frequency2[word] += 1;
    }

    for (const key in frequency1) {
        if (!(key in frequency2)) {
            return false;
        }

        if (frequency1[key] !== frequency2[key]) {
            return false;
        }
    }

    return true;
};

export default validAnagram;
