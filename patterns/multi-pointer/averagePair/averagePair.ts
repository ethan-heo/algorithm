const averagePair = (values: number[], avg: number): boolean => {
    let point = 0;
    let next = 1;

    while (next < values.length && point > -1) {
        const _avg = (values[point] + values[next]) / 2;

        if (_avg === avg) return true;

        if (_avg > avg) {
            point--;
        } else {
            next++;
            point++;
        }
    }

    return false;
};

export default averagePair;
