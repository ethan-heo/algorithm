type KeyPad = number | "*" | "#";

export default function 키패드_누르기(
    numbers: number[],
    hand: "left" | "right"
) {
    let currentLeftHandPos: KeyPad = "*";
    let currentRightHandPos: KeyPad = "#";

    function getLeftHand(num: number) {
        if ([1, 4, 7].includes(num)) {
            currentLeftHandPos = num;
            return "L";
        } else {
            return null;
        }
    }

    function getRightHand(num: number) {
        if ([3, 6, 9].includes(num)) {
            currentRightHandPos = num;
            return "R";
        } else {
            return null;
        }
    }

    function closestHand(num: number) {
        const EDGE_MAP: Record<KeyPad, KeyPad[]> = {
            0: [8],
            1: [2, 4],
            2: [5],
            3: [2, 6],
            4: [1, 5, 7],
            5: [2, 8],
            6: [3, 5, 9],
            7: [4, 8, "*"],
            8: [5, 0],
            9: [6, 8, "#"],
            "*": [7, 0],
            "#": [9, 0],
        };

        function calDistance(next: KeyPad, distance = 0, cache: KeyPad[] = []) {
            if (next === num) return distance;

            cache.push(next);

            const edges = EDGE_MAP[next];
            let result = 999;

            for (const pad of edges) {
                if (cache.includes(pad)) continue;

                result = Math.min(
                    result,
                    calDistance(pad, distance + 1, cache)
                );
            }

            return result;
        }

        const leftHandDistance = calDistance(currentLeftHandPos);
        const rightHandDistance = calDistance(currentRightHandPos);
        const result =
            leftHandDistance === rightHandDistance
                ? hand === "left"
                    ? "L"
                    : "R"
                : leftHandDistance < rightHandDistance
                ? "L"
                : "R";

        if (result === "L") {
            currentLeftHandPos = num;
        } else {
            currentRightHandPos = num;
        }

        return result;
    }

    const checkerSeq = [getLeftHand, getRightHand, closestHand];

    return numbers.reduce((acc, num) => {
        checkerSeq.some((checker) => {
            const result = checker(num);
            return result ? ((acc += result), true) : false;
        });

        return acc;
    }, "");
}
