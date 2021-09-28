export default function lotto_lowest_and_top_rank(
    lottos: number[],
    win_nums: number[]
): [number, number] {
    const ranks = [6, 6, 5, 4, 3, 2, 1];
    const [correctCount, zeroCount] = lottos.reduce(
        (acc, lotto) => {
            if (win_nums.includes(lotto)) {
                acc[0]++;
            }
            if (lotto === 0) {
                acc[1]++;
            }
            return acc;
        },
        [0, 0]
    );

    return [ranks[correctCount + zeroCount], ranks[correctCount]];
}
