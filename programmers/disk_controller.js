class PriorityQueue{
    constructor() {
        this.heap = [];
    }
    
    size() {
        return this.heap.length;
    }

    swap(idx1, idx2) {
        [this.heap[idx2], this.heap[idx1]] = [this.heap[idx1], this.heap[idx2]];
    }

    // [요청시각, 작업기간, 요청번호]
    // job1이 더 높으면 1, job2가 더 높으면 0
    isFirstPrior(idx1, idx2) {
        let job1 = this.heap[idx1];
        let job2 = this.heap[idx2];
        return job1[1] === job2[1] ? (
            job1[0] === job2 ? (job1[2] < job2[0]) : (job1[0] < job2[0])
        ) : (job1[1] < job2[1]);
    }

    add(job) {
        this.heap.push(job);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.heap.length - 1;
        let parentIdx = Math.floor((idx - 1) / 2);
        
        while (this.heap[parentIdx] && this.isFirstPrior(idx, parentIdx)) {
            this.swap(idx, parentIdx);
            
            idx = parentIdx;
            parentIdx = Math.floor((idx - 1) / 2);
        }
    }

    poll() {
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        const prior = this.heap[0];
        this.swap(0, this.heap.length - 1);
        this.heap.pop();
        this.bubbleDown();
        return prior;
    }

    bubbleDown() {
        let idx = 0;
        let leftIdx = idx * 2 + 1;
        let rightIdx = idx * 2 + 2;
        
        while ((this.heap[leftIdx] && this.isFirstPrior(leftIdx, idx)) ||
              (this.heap[rightIdx] && this.isFirstPrior(rightIdx, idx))) {
            let priorIdx = leftIdx;
            
            if (this.heap[rightIdx] && this.isFirstPrior(rightIdx, leftIdx)) {
                priorIdx = rightIdx;
            }
            this.swap(idx, priorIdx);
            idx = priorIdx;
            leftIdx = idx * 2 + 1;
            rightIdx = idx * 2 + 2;
        }
    }
}

function solution(jobs) {
    let requiredTime = 0;
    const len = jobs.length;
    
    let startTime = 0;
    let duration = 0;
    let prevEndTime = 0;
    const queue = [[0,0]];
    const pq = new PriorityQueue();
    
    jobs = jobs.map((j, i) => [...j, i]).sort((a,b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
    
    while (queue.length) {
        const cur = queue.shift();
        startTime = cur[0];
        duration = cur[1];
        if (prevEndTime === 0) {
            prevEndTime += startTime;
        }

        while (jobs[0] && jobs[0][0] <= prevEndTime + duration) {
            pq.add(jobs.shift());
        }
        const time = prevEndTime > startTime ? (prevEndTime + duration - startTime) : duration;
        requiredTime += time;

        if (pq.size()) {
            queue.push(pq.poll());
        } else  {
            if (jobs.length) {
                const job = jobs.shift();
                queue.push(job);
            }
        }
        prevEndTime += duration;
    }
    
    return Math.floor(requiredTime / len);
}