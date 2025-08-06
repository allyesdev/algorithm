const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "baekjoon/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ").map(n => Number(n));

let [N, K] = input;

let digit = 1;
let nine = 9;
let result = 0;

while (K > nine * digit) {
    K -= (nine * digit);
    result += nine;
    nine *= 10;
    digit++;
}

result += Math.floor((K - 1) / digit) + 1;
console.log(result > N ? -1 : String(result)[(K - 1) % digit]);