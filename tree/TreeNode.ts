import { Node } from "./Tree.types";

const createTreeNode = <T>(initData: T): Node<T> => {
    return {
        data: initData,
        parent: null,
        children: [],
    };
};

export default createTreeNode;
