import 키패드_누르기 from "./키패드_누르기";

test.each`
    numbers         | hand       | result
    ${[4, 3, 2, 8]} | ${"right"} | ${"LRRR"}
`(`키패드 누르기`, ({ numbers, hand, result }) => {
    expect(키패드_누르기(numbers, hand)).toBe(result);
});
