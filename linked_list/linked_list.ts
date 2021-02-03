type Node = {
    data: number;
    next: Node | null;
    prev: Node | null;
};

export default class LinkedList {
    head: Node;
    last: Node;

    constructor(data: number) {
        this.head = this.createNode(data);
        this.last = this.head;
    }

    createNode(data: number): Node {
        return {
            data,
            next: null,
            prev: null,
        };
    }

    appendNode(data: number) {
        const lastNode = this.getLastNode();
        const newNode = this.createNode(data);

        lastNode.next = newNode;
        newNode.prev = lastNode;

        this.last = newNode;
    }

    getLastNode(): Node {
        let node: Node = this.head;

        while (true) {
            if (!node.next) break;

            node = node.next;
        }

        return node;
    }

    getNode(index: number): Node | null {
        let node: Node | null = this.head;
        let count = 1;

        while (true) {
            if (!node || count >= index) {
                break;
            }

            node = node.next;
            count += 1;
        }

        return node;
    }

    getNodeFromLast(index: number) {
        let node: Node | null = this.last;
        let count = 1;

        while (true) {
            if (!node || count >= index) {
                break;
            }

            node = node.prev;
            count += 1;
        }

        return node;
    }
}
