import { beforeEach, describe, expect, it } from "vitest";
import createTree from "./Tree";

describe(`Tree test`, () => {
    const tree = createTree(0);

    beforeEach(() => {
        tree.createNode(1)
            .createNode(2)
            .createNode(3)
            .createNode(4)
            .createNode(5);
    });

    // it(`findNode`, () => {
    //     expect(tree.findNode((node) => node.data === 3).data).toBe(3);
    // });

    it(`travalse`, () => {
        const numbers: number[] = [];
        /**
         *                0
         *          1           2
         *      3       4   5
         */

        console.dir(tree.node);

        tree.travalse((node) => {
            console.log(node.data);
            if (node.data !== null) {
                numbers.push(node.data as number);
            }
        });

        expect(numbers).toStrictEqual([0, 1, 3, 4, 2, 5]);
    });
});
