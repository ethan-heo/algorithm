class Node {
    data: any;
    prev: Node | null = null;
    next: Node | null = null;

    constructor(data: any) {
        this.data = data;
    }
}

export class Queue {
    head: Node | null = null;
    tail: Node | null = null;

    enqueue(data: any) {
        const newNode = new Node(data);

        if (!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        this.tail.next = newNode;
        this.tail = newNode;
    }

    dequeue() {
        if (!this.head) {
            return null;
        }

        const head = this.head;

        this.head = head.next;

        if (!this.head) {
            this.tail = null;
        }

        head.next = null;

        return head.data;
    }

    peek(num: number) {
        let node = this.head;
        let count = 0;

        if (!node) return null;

        while (++count < num) {
            if (node) {
                node = node.next;
            }
        }

        return node?.data;
    }

    isEmpty() {
        return this.head === null;
    }

    toArray() {
        const arr = [];
        let node = this.head;

        while (true) {
            if (!node) break;

            arr.push(node.data);
            node = node.next;
        }

        return arr;
    }
}
