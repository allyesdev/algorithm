const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "baekjoon/input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const num = parseInt(input);
let fiveCount = 0;

for (let i = 1; i <= num; i++) {
  if (i % 5 === 0) {
    let temp = i;
    while (temp % 5 === 0) {
        temp /= 5;
        fiveCount++;
    }
  }
}

console.log(fiveCount);
