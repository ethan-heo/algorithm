import LinkedList from "./linked_list";

describe("LinkedList", () => {
    let linkedList: LinkedList;

    beforeEach(() => {
        linkedList = new LinkedList(0);
    });

    test("create LinkedList", () => {
        expect(linkedList.head.data).toStrictEqual(0);
    });

    test("linkedList.createNode", () => {
        expect(linkedList.createNode(1).data).toStrictEqual(1);
    });

    test("linkedList.lastNode", () => {
        linkedList.appendNode(1);
        linkedList.appendNode(2);
        linkedList.appendNode(3);

        expect(linkedList.getLastNode().data).toStrictEqual(3);
    });

    test("linkedList.appendNode", () => {
        expect(linkedList.getLastNode().data).toStrictEqual(0);

        linkedList.appendNode(1);

        expect(linkedList.getLastNode().data).toStrictEqual(1);

        linkedList.appendNode(2);

        expect(linkedList.getLastNode().data).toStrictEqual(2);
    });

    test("linkedList.getNode", () => {
        for (let i = 1; i <= 10; i++) {
            linkedList.appendNode(i);
        }

        expect(linkedList.getNode(2)?.data).toEqual(1);
    });

    test("linkedList.getNodeFromLast", () => {
        for (let i = 1; i <= 10; i++) {
            linkedList.appendNode(i);
        }

        expect(linkedList.getNodeFromLast(2)?.data).toEqual(9);
    });
});

describe("링크드 리스트의 끝에서 K번째 값을 반환하시오.", () => {
    let linkedList: LinkedList;

    beforeAll(() => {
        linkedList = new LinkedList(0);

        for (let i = 1; i <= 10; i++) {
            linkedList.appendNode(i);
        }
    });

    test("2번째", () => {
        expect(linkedList.getNodeFromLast(2)?.data).toEqual(9);
    });

    test("8번째", () => {
        expect(linkedList.getNodeFromLast(8)?.data).toEqual(3);
    });
});
