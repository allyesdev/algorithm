const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "baekjoon/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

// 격자무늬로 R의 홀짝의 반대, C의 홀짝의 반대에 심을 수 있음

const [n, r, c] = input.map((_) => Number(_));
const isRowOdd = r % 2 === 0;
const isColOdd = c % 2 === 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (i === r - 1 && j === c - 1) {
      process.stdout.write("v");
    } else if (
      ((i % 2 === 0 === !isRowOdd) && (j % 2 === 0 === !isColOdd)) ||
      ((i % 2 === 0 !== !isRowOdd) && (j % 2 === 0 === isColOdd))
    ) {
      process.stdout.write("v");
    } else {
      process.stdout.write(".");
    }
  }
  console.log("");
}
