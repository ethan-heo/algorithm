import { Node } from "./Tree.types";

const createTreeNode = <T>(initData?: T): Node<T> => {
    return {
        data: initData ?? null,
        parent: null,
        left: null,
        right: null,
    };
};

export default createTreeNode;
