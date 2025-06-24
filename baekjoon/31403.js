const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "baekjoon/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [num1, num2, num3] = input;

console.log(parseInt(num1) + parseInt(num2) - parseInt(num3));
console.log(num1 + num2 - num3);