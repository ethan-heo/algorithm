import {
    sortMenu,
    findMenu,
    canOrderFromBaemin,
    canOrderFromBaeminUsingMap,
} from "./binarySearch";

describe("배달의 민족 배달 가능 여부", () => {
    test("ASC 정렬", () => {
        const menus = sortMenu(["만두", "떡볶이", "오뎅", "사이다", "콜라"]);

        expect(sortMenu(menus)).toEqual([
            "떡볶이",
            "만두",
            "사이다",
            "오뎅",
            "콜라",
        ]);
    });

    test("메뉴 찾기", () => {
        const order = "콜라";
        const menus = sortMenu(["만두", "떡볶이", "오뎅", "사이다", "콜라"]);

        expect(findMenu(order, menus)).toBe(true);
    });

    test("배달 가능 여부 - binary search", () => {
        const canOrders = ["오뎅", "콜라", "만두"];
        const canNotOrders = ["비빔밥", "떡볶이"];
        const menus = sortMenu(["만두", "떡볶이", "오뎅", "사이다", "콜라"]);

        expect(canOrderFromBaemin(menus, canOrders)).toBe(true);
        expect(canOrderFromBaemin(menus, canNotOrders)).toBe(false);
    });

    test("배달 가능 여부 - map", () => {
        const canOrders = ["오뎅", "콜라", "만두"];
        const canNotOrders = ["비빔밥", "떡볶이"];
        const menus = ["만두", "떡볶이", "오뎅", "사이다", "콜라"];

        expect(canOrderFromBaeminUsingMap(menus, canOrders)).toBe(true);
        expect(canOrderFromBaeminUsingMap(menus, canNotOrders)).toBe(false);
    });
});
