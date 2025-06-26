const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "baekjoon/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [nStr, shirtsStr, bundleStr] = input;

const n = parseInt(nStr);
const [shirtBundleNum, penBundleNum] = bundleStr.split(' ').map((b) => parseInt(b));

console.log(
  shirtsStr.split(' ').reduce((acc, shirtNum) => {
    return acc + Math.ceil(parseInt(shirtNum) / shirtBundleNum);
  }, 0)
);
console.log(Math.floor(n / penBundleNum), n % penBundleNum);
