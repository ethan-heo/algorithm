import { Queue } from "./queue";

describe("queue", () => {
    let queue: Queue;

    beforeEach(() => {
        queue = new Queue();
    });

    test("enqueue", () => {
        queue.enqueue(1);
        queue.enqueue(2);

        expect(queue.toArray()).toEqual([1, 2]);
    });

    test("dequeue", () => {
        queue.enqueue(1);
        queue.enqueue(2);

        expect(queue.toArray()).toEqual([1, 2]);
        expect(queue.dequeue()).toEqual(1);
        expect(queue.toArray()).toEqual([2]);
    });

    test("peek", () => {
        queue.enqueue(1);
        queue.enqueue(2);

        expect(queue.peek(1)).toEqual(1);
        expect(queue.peek(2)).toEqual(2);
    });

    test("isEmpty", () => {
        expect(queue.isEmpty()).toBe(true);
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.isEmpty()).toBe(false);
    });
});
