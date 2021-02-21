import { Heap } from "./heap";

describe("heap", () => {
    let heap: Heap;

    beforeEach(() => {
        heap = new Heap();
    });

    test("insert", () => {
        heap.insert(8)
            .insert(6)
            .insert(3)
            .insert(4)
            .insert(2)
            .insert(1)
            .insert(9);

        expect(heap.tree).toEqual([-1, 9, 6, 8, 4, 2, 1, 3]);
    });

    test("delete", () => {
        heap.insert(8).insert(7).insert(2).insert(6).insert(5).insert(4);

        expect(heap.delete()).toEqual(8);
        expect(heap.tree).toEqual([-1, 7, 6, 4, 2, 5]);
    });
});
