const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "baekjoon/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const testN = parseInt(input[0]);

for (let i = 1; i <= testN * 2; i += 2) {
    const [n, m] = input[i].split(' ').map(_ => Number(_));
    const queue = input[i + 1].split(' ').map((_, idx) => ({order: idx, importance: Number(_)}));
    const orderQueue = [];

    while (queue.length) {
        const currentOrder = queue[0].order;
        const currentImportance = queue[0].importance;
        if (queue.length === 1 || !queue.some(obj => (obj.importance > currentImportance))) {
            queue.shift();
            orderQueue.push(currentOrder);
        } else {
            queue.push(queue.shift());
        }
    }

    console.log(orderQueue.indexOf(m) + 1);
}