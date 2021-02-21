import { bfsStack } from "./bfs";

describe("bfs", () => {
    const graph = {
        1: [2, 3, 4],
        2: [1, 5],
        3: [1, 6, 7],
        4: [1, 8],
        5: [2, 9],
        6: [3, 10],
        7: [3],
        8: [4],
        9: [5],
        10: [6],
    };

    test("stack bfs", () => {
        expect(bfsStack(graph, 1)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
});
