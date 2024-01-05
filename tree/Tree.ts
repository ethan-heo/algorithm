import { Node } from "./Tree.types";
import createTreeNode from "./TreeNode";

const createTree = <T>(initData: T) => {
    const rootNode = createTreeNode(initData);

    rootNode.left = createTreeNode();
    rootNode.right = createTreeNode();

    const findNode = (
        node: Node<T>,
        callback: (node: Node<T>) => boolean
    ): Node<T> => {
        console.log(node.data);
        if (node.left !== null && callback(node.left)) {
            return node.left;
        }

        if (node.right !== null && callback(node.right)) {
            return node.right;
        }

        if (node.left !== null) {
            return findNode(node.left, callback);
        }

        if (node.right !== null) {
            return findNode(node.right, callback);
        }

        if (node.parent !== null) {
            return findNode(node.parent, callback);
        } else {
            return node;
        }
    };

    const travalse = (
        node: Node<T>,
        callback: (node: Node<T>) => void
    ): Node<T> => {
        callback(node);

        if (node.left !== null) {
            return travalse(node.left, callback);
        }

        if (node.right !== null) {
            return travalse(node.right, callback);
        }

        if (node.parent !== null) {
            return travalse(node.parent, callback);
        } else {
            return node;
        }
    };

    const createNode = (node: Node<T>, data: T) => {
        const _node = findNode(node, (node) => node.data === null);

        _node.data = data;
        _node.left = createTreeNode();
        _node.right = createTreeNode();

        return this;
    };

    return {
        node: rootNode,
        travalse: (callback: (node: Node<T>) => void) =>
            travalse(rootNode, callback),
        findNode: (callback: (node: Node<T>) => boolean) =>
            findNode(rootNode, callback),
        createNode(data: T) {
            createNode(rootNode, data);
            return this;
        },
    };
};

export default createTree;
