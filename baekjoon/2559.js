const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "baekjoon/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [line1, line2] = input;
const [N, K] = line1.split(" ").map((n) => Number(n));
const nums = line2.split(" ").map((n) => Number(n));


let sum = 0;
for (let i = 0; i < K; i++) {
    sum += nums[i];
}

let max = sum;
for (let i = 1; i + K - 1 < N; i++) {
    sum = sum - nums[i - 1] + nums[i + K - 1];
    max = sum > max ? sum : max;
}

console.log(max);
