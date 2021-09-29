import 신규_아이디_추천 from "./신규_아이디_추천";

test.each`
    new_id                           | result
    ${"...!@BaT#*..y.abcdefghijklm"} | ${"bat.y.abcdefghi"}
    ${"z-+.^."}                      | ${"z--"}
    ${"123_.def"}                    | ${"123_.def"}
    ${"abcdefghijklmn.p"}            | ${"abcdefghijklmn"}
    ${"=.="}                         | ${"aaa"}
`(`신규 아이디 추천`, ({ new_id, result }) => {
    expect(신규_아이디_추천(new_id)).toBe(result);
});
