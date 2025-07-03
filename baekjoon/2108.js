const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "baekjoon/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((_) => Number(_));

const n = input[0];
let sum = 0;
let medianIdx = Math.floor(n / 2);

let median = 0;
let min = 4001;
let max = -4001;
const numbers = input.slice(1).sort((a, b) => a - b);

let maxFrequency = 0;
let currentFrequency = 0;
let frequencyList = [];

for (let i = 0; i < n; i++) {
  const num = numbers[i];
  sum += num;
  currentFrequency++;
  if (i + 1 === n || numbers[i + 1] !== num) {
    if (maxFrequency < currentFrequency) {
      frequencyList = [num];
      maxFrequency = currentFrequency;
    } else if (maxFrequency === currentFrequency) {
      frequencyList.push(num);
    }
    currentFrequency = 0;
  }
  if (min > num) {
    min = num;
  }
  if (max < num) {
    max = num;
  }
  if (medianIdx === i) {
    median = num;
  }
}

let secondFrequent =
  frequencyList.length > 1
    ? frequencyList.sort((a, b) => a - b)[1]
    : frequencyList[0];
let mean = Math.round(sum / n);

console.log(mean || 0);
console.log(median);
console.log(secondFrequent);
console.log(max - min);
