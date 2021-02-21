import { dfsRecursion, dfsStack } from "./dfs";

describe("dfs", () => {
    const graph = {
        1: [2, 5, 9],
        2: [1, 3],
        3: [2, 4],
        4: [3],
        5: [1, 6, 8],
        6: [5, 7],
        7: [6],
        8: [5],
        9: [1, 10],
        10: [9],
    };

    test("recursion dfs", () => {
        expect(dfsRecursion(graph, [], 1)).toEqual([
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
        ]);
    });

    test("stack dfs", () => {
        expect(dfsStack(graph, 1)).toEqual([1, 9, 10, 5, 8, 6, 7, 2, 3, 4]);
    });
});
