class PriorityQueue {
    constructor() {
        this.heap = [];
    }
    
    size() {
        return this.heap.length;
    }
    
    swap(idx1, idx2) {
        [this.heap[idx2], this.heap[idx1]] = [this.heap[idx1], this.heap[idx2]];
    }
    
    bubbleUp(idx = this.heap.length - 1) {
        let parentIdx = Math.floor((idx - 1) / 2);
        while ((this.heap[parentIdx] !== undefined && this.heap[parentIdx] > this.heap[idx])) {
            this.swap(idx, parentIdx);
            idx = parentIdx;
            parentIdx = Math.floor((idx - 1) / 2);
        }
    }
    
    add(num) {
        this.heap.push(num);
        this.bubbleUp();
    }
    
    bubbleDown(idx = 0) {
        let leftIdx = idx * 2 + 1;
        let rightIdx = idx * 2 + 2;
        
        while (
            (this.heap[leftIdx] !== undefined && this.heap[leftIdx] < this.heap[idx]) ||
            (this.heap[rightIdx] !== undefined && this.heap[rightIdx] < this.heap[idx])
        ) {
            let smaller = leftIdx;
            if (this.heap[rightIdx] !== undefined && this.heap[rightIdx] < this.heap[leftIdx]) {
                smaller = rightIdx;
            }
            this.swap(smaller, idx);
            idx = smaller;
            leftIdx = idx * 2 + 1;
            rightIdx = idx * 2 + 2;
        }
    }
    
    poll() {
        if (this.size() === 1) {
            return this.heap.pop();
        } else if (!this.size()) {
            return 0;
        }
        const min = this.heap[0];
        this.swap(0, this.size() - 1);
        this.heap.pop();
        this.bubbleDown();
        return min;
    }

    printHeap() {
        console.log(this.heap);
    }
    
    peak() {
        return this.heap[0];
    }

    remove(element) {
        const index = this.heap.indexOf(element);
        if (index === -1) return false;

        this.swap(index, this.heap.length - 1);
        this.heap.pop();
        if (index < this.heap.length) {
            this.bubbleUp(index);
            this.bubbleDown(index);
        }
        return true;
    }
}

function solution(operations) {
    const minHeap = new PriorityQueue();
    const maxHeap = new PriorityQueue();
    let count = 0;

    for (const operation of operations) {
        const [cmd, num] = operation.split(' ');
        switch (cmd) {
            case 'I': {
                minHeap.add(Number(num));
                maxHeap.add(Number(num) * (-1));
                count++;
                break;
            }
            case 'D': {
                if (num === '-1') {
                    maxHeap.remove(-minHeap.poll());
                } else {
                    minHeap.remove(-maxHeap.poll());
                }
                count--;
                break;
            }
        }
        // maxHeap.printHeap();
        // minHeap.printHeap();
    }
    
    return [-maxHeap.poll(), minHeap.poll()];
}