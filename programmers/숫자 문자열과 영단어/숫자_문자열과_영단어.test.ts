import 숫자_문자열과_영단어 from "./숫자_문자열과_영단어";

test.each`
    s                     | result
    ${"one4seveneight"}   | ${1478}
    ${"23four5six7"}      | ${234567}
    ${"2three45sixseven"} | ${234567}
    ${"123"}              | ${123}
`(`숫자 문자열과 영단어`, ({ s, result }) => {
    expect(숫자_문자열과_영단어(s)).toBe(result);
});
