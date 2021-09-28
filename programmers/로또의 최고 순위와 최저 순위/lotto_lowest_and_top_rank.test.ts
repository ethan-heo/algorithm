import lotto_lowest_and_top_rank from "./lotto_lowest_and_top_rank";

test.each`
    lottos                   | win_nums                    | result
    ${[44, 1, 0, 0, 31, 25]} | ${[31, 10, 45, 1, 6, 19]}   | ${[3, 5]}
    ${[0, 0, 0, 0, 0, 0]}    | ${[38, 19, 20, 40, 15, 25]} | ${[1, 6]}
    ${[45, 4, 35, 20, 3, 9]} | ${[20, 9, 3, 45, 4, 35]}    | ${[1, 1]}
`(`로또의 최고 순위와 최저 순위 구하기`, ({ lottos, win_nums, result }) => {
    expect(lotto_lowest_and_top_rank(lottos, win_nums)).toStrictEqual(result);
});
