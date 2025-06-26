const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : 'baekjoon/input.txt';
const input = fs.readFileSync(filePath).toString().trim();

const n = parseInt(input);

const isEndNumber = (num) => {
    return `${num}`.includes('666');
}

let currentNum = 665;
let endNumberIdx = 1;
while (currentNum++) {
    if (isEndNumber(currentNum)) {
        endNumberIdx++;
    }
    if (endNumberIdx > n) {
        console.log(currentNum);
        break;
    }
}