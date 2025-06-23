const fs = require("fs");
const filePath = (process.platform === "linux" ? "dev/stdin" : "baekjoon/input.txt");
const input = fs.readFileSync(filePath).toString().trim().split("\n");

/**
10 6
1 3 10000
1 4 -5000
1 7 -3000
2 1 10
1 6 35000
2 4 10
 */

const dayAndQueryStr = input.shift();
const dayAndQuery = dayAndQueryStr.trim().split(" ");
const days = Number(dayAndQuery[0]);
const queryNum = Number(dayAndQuery[1]);

const balanceByDay = Array(days).fill(0);

for (let i = 0; i < queryNum; i++) {
  const queryStr = input.shift();
  const queryArr = queryStr.split(" ");

  const [cmd, p, q] = queryArr;
  if (cmd === "1") {
    balanceByDay[Number(p) - 1] += Number(q);
  } else if (cmd === "2") {
    const ans = balanceByDay.reduce((acc, cur, idx) => {
      if (idx >= Number(p) - 1 && idx <= Number(q) - 1) {
        return acc + cur;
      }
      return acc;
    }, 0);
    console.log(ans);
  }
}
