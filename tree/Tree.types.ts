export type Node<T> = {
    data: T;
    parent: Node<T> | null;
    children: Node<T>[];
};

export type Travalsing = "preOrder" | "inOrder" | "postOrder";
