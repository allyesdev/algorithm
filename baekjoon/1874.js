const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "baekjoon/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
const target = input.slice(1);

let isPossible = true;
let stackNumber = 1;
const stack = [];
const answer = [];

for (let i = 0; i < n; i++) {
    const num = Number(target[i]);
    for (; stackNumber <= num; stackNumber++) {
        answer.push('+');
        stack.push(stackNumber);
    }
    if (stack.at(stack.length - 1) === num) {
        answer.push('-');
        stack.pop();
    } else {
        isPossible = false;
        break;
    }
}

if (isPossible) {
    console.log(answer.join('\n'));
} else {
    console.log("NO");
}

