const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "baekjoon/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, target] = input[0].split(" ").map((n) => Number(n));

const differences = [];
let accomplished = 0;
for (let i = 1; i <= N; i++) {
    const [mine, max] = input[i].split(" ").map((n) => Number(n));

    if (max - mine > 0) {
        differences.push(max - mine);
    } else {
        accomplished++;
    }
}

if (accomplished >= target) {
    console.log(0);
} else {
    differences.sort((a,b) => (a-b));
    for (let i = 0; i < differences.length; i++) {
        if (++accomplished >= target) {
            console.log(differences[i]);
            return;
        }
    }
}