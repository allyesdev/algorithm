const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "baekjoon/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
const company = new Set();

for (let i = 1; i < n + 1; i++) {
  const [name, record] = input[i].split(" ");
  if (record === "enter") {
    company.add(name);
  } else if (record === "leave") {
    company.delete(name);
  }
}

const result = Array.from(company).sort().reverse();
console.log(result.join('\n'));
