import { Node, Travalsing } from "./Tree.types";
import createTreeNode from "./TreeNode";

const createTree = <T>() => {
    let rootNode: Node<T> | null = null;

    const findNode = (
        node: Node<T>,
        callback: (node: Node<T>) => boolean
    ): Node<T> => {};

    const preOrderTravalse = (
        node: Node<T> | null,
        callback: (node: Node<T>) => void
    ) => {
        if (node !== null) {
            callback(node);
            preOrderTravalse(node.children[0] ?? null, callback);
            preOrderTravalse(node.children[1] ?? null, callback);
        }
    };

    const inOrderTravalse = (
        node: Node<T> | null,
        callback: (node: Node<T>) => void
    ) => {
        if (node !== null) {
            preOrderTravalse(node.children[0] ?? null, callback);
            callback(node);
            preOrderTravalse(node.children[1] ?? null, callback);
        }
    };

    const postOrderTravalse = (
        node: Node<T> | null,
        callback: (node: Node<T>) => void
    ) => {
        if (node !== null) {
            preOrderTravalse(node.children[0] ?? null, callback);
            preOrderTravalse(node.children[1] ?? null, callback);
            callback(node);
        }
    };

    const getRootNode = () => {
        if (rootNode === null) {
            throw new Error(`Must be create tree`);
        }

        return rootNode;
    };

    return {
        getRootNode,
        travalse: (
            travalsing: Travalsing,
            callback: (node: Node<T>) => void
        ) => {
            const rootNode = getRootNode();

            switch (travalsing) {
                case "preOrder":
                    preOrderTravalse(rootNode, callback);
                    break;
                case "inOrder":
                    inOrderTravalse(rootNode, callback);
                    break;
                case "postOrder":
                    postOrderTravalse(rootNode, callback);
                    break;
            }
        },

        findNode: (callback: (node: Node<T>) => boolean) =>
            findNode(getRootNode(), callback),
        createBinaryTree: (data: T | T[]) => {
            let _data: T[] = [];

            if (!is(data, "array")) {
                _data.push(data);
            } else {
                _data = data;
            }

            const tree: Node<T>[] = [];

            _data.forEach((data, idx) => {
                const node = createTreeNode(data);

                if (idx === 0) {
                    tree.push(node);
                } else {
                    tree.push(node);

                    let parentNodeIdx;

                    if ((idx + 1) % 2 === 0) {
                        parentNodeIdx = idx / 2;
                    } else {
                        parentNodeIdx = idx / 2 - 1;
                    }

                    const parentNode = tree[Math.floor(parentNodeIdx)];

                    parentNode.children.push(node);
                }
            });

            rootNode = tree[0];

            return rootNode;
        },
    };
};

export default createTree;

type isReturnTypeMap = {
    string: string;
    number: number;
    array: any[];
    object: object;
    boolean: boolean;
    symbol: symbol;
    null: null;
    undefined: undefined;
};

type isCompareType =
    | "string"
    | "number"
    | "array"
    | "object"
    | "boolean"
    | "symbol"
    | "null"
    | "undefined";

function is<C extends isCompareType>(
    data: any,
    compare: C
): data is isReturnTypeMap[C] {
    const type = Object.prototype.toString
        .call(data)
        .slice(8, -1)
        .toLocaleLowerCase();

    return type === compare;
}
