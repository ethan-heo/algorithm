export class Heap {
    tree: number[] = [-1];

    insert(data: number) {
        this.tree.push(data);

        let currentIndex = this.tree.length - 1;

        while (currentIndex > 1) {
            const parentIndex = this.getParentIndex(currentIndex);

            const parentNode = this.tree[parentIndex];
            const currentNode = this.tree[currentIndex];

            if (currentNode > parentNode) {
                this.swap(parentIndex, currentIndex);

                currentIndex = parentIndex;
            } else {
                break;
            }
        }

        return this;
    }

    delete() {
        this.swap(1, this.tree.length - 1);

        const result = this.tree.pop();

        let currentIndex = 1;
        const len = this.tree.length - 1;

        while (currentIndex <= len) {
            const leftChildIndex = this.getLeftChildIndex(currentIndex);
            const rightChildIndex = this.getLeftChildIndex(currentIndex);
            let maxIndex = currentIndex;

            if (
                leftChildIndex <= len &&
                this.tree[leftChildIndex] > this.tree[maxIndex]
            ) {
                maxIndex = leftChildIndex;
            }

            if (
                rightChildIndex <= len &&
                this.tree[rightChildIndex] > this.tree[maxIndex]
            ) {
                maxIndex = rightChildIndex;
            }

            if (maxIndex === currentIndex) {
                break;
            }

            this.swap(currentIndex, maxIndex);

            currentIndex = maxIndex;
        }

        return result;
    }

    swap(aIndex: number, bIndex: number) {
        [this.tree[aIndex], this.tree[bIndex]] = [
            this.tree[bIndex],
            this.tree[aIndex],
        ];
    }

    getParentIndex(index: number) {
        return Math.floor(index / 2);
    }
    getLeftChildIndex(parentIndex: number) {
        return Math.floor(parentIndex * 2);
    }
    getRightChildIndex(parentIndex: number) {
        return Math.floor(parentIndex * 2) + 1;
    }
}
