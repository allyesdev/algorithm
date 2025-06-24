const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "baekjoon/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [str, numberStr]  = input;
const index = parseInt(numberStr) - 1;
console.log(str[index]);
