class Node {
    data: any;
    prev: Node | null = null;
    next: Node | null = null;

    constructor(data: any) {
        this.data = data;
    }
}

export class Stack {
    tail: Node | null = null;
    head: Node | null = null;

    push(data: any) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
            return;
        }

        const head = this.head;

        head.next = newNode;
        this.head = newNode;
        this.head.prev = head;
    }

    pop() {
        if (!this.head) {
            return null;
        }

        const head = this.head;

        this.head = head.prev;

        if (this.head) {
            this.head.next = null;
        } else {
            this.tail = null;
        }

        head.prev = null;

        return head.data;
    }

    peek(num?: number): any {
        let node = this.head;
        let count = 0;

        if (!num) return node?.data;

        while (++count < num) {
            if (node) {
                node = node.prev;
            }
        }

        return node?.data;
    }

    isEmpty() {
        return this.head === null;
    }

    toArray() {
        const arr = [];
        let node = this.tail;

        while (true) {
            if (!node) break;

            arr.push(node.data);
            node = node.next;
        }

        return arr;
    }
}
