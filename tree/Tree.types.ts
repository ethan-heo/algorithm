export type Node<T> = {
    data: T | null;
    parent: Node<T> | null;
    left: Node<T> | null;
    right: Node<T> | null;
};
