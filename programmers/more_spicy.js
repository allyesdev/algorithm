class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    size() {
        return this.heap.length;
    }
    
    swap(idx1, idx2) {
        [this.heap[idx2], this.heap[idx1]] = [this.heap[idx1], this.heap[idx2]]
    }
    
    bubbleUp() {
        let idx = this.heap.length - 1;
        let parentIdx = Math.floor((idx - 1) / 2);
        while (this.heap[parentIdx] && this.heap[parentIdx] > this.heap[idx]) {
            this.swap(idx, parentIdx);
            idx = parentIdx;
            parentIdx = Math.floor((idx - 1) / 2);
        }
    }
    
    add(n) {
        this.heap.push(n);
        this.bubbleUp();
    }
    
    bubbleDown() {
        let idx = 0;
        let leftIdx = idx * 2 + 1;
        let rightIdx = idx * 2 + 2;
        while ((this.heap[leftIdx] && this.heap[leftIdx] < this.heap[idx]) 
               || (this.heap[rightIdx] && this.heap[rightIdx] < this.heap[idx])) {
            let smallerIdx = leftIdx;
            if (this.heap[rightIdx] && this.heap[rightIdx] < this.heap[leftIdx]) {
                smallerIdx = rightIdx;
        }
            this.swap(idx, smallerIdx);
            
            idx = smallerIdx;
            leftIdx = idx * 2 + 1;
            rightIdx = idx * 2 + 2;
        }
    }
    
    poll() {
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        const min = this.heap[0];
        this.swap(0, this.heap.length - 1);
        this.heap.pop();
        this.bubbleDown();
        return min;
    }
    
    min() {
        return this.heap[0];
    }
}
function solution(scoville, K) {
    const heap = new MinHeap();
    scoville.forEach((s) => {
        heap.add(s);
    });
    
    let answer = 0;
    while (heap.min() < K) {
        const min = heap.poll();
        if (heap.size() === 0) {
            return -1;
        }
        const min2 = heap.poll();
        const newScoville = min + min2 * 2;
        heap.add(newScoville);
        answer++;
    }
    return answer;
}