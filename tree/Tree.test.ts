import { beforeEach, describe, expect, it } from "vitest";
import createTree from "./Tree";
import { Travalsing } from "./Tree.types";

describe(`Tree test`, () => {
    const tree = createTree();

    beforeEach(() => {
        tree.createBinaryTree([1, 2, 3, 4, 5, 6, 7]);
    });

    // it(`findNode`, () => {
    //     expect(tree.findNode((node) => node.data === 3).data).toBe(3);
    // });

    it.each([
        ["preOrder", [1, 2, 4, 5, 3, 6, 7]],
        ["inOrder", [2, 4, 5, 1, 3, 6, 7]],
        ["postOrder", [2, 4, 5, 3, 6, 7, 1]],
    ])(`travalse(%s) => %s`, (travalsing, expected) => {
        const result: number[] = [];

        tree.travalse(travalsing as Travalsing, (node) => {
            result.push(node.data as number);
        });

        expect(result).toStrictEqual(expected);
    });
});
