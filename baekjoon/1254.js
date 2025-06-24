const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "baekjoon/input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const isPalindrome = (str) => {
  return str === str.split("").reverse().join("");
}

const strLength = input.length;
for (let i = 0; i < strLength; i++) {
  const substr = input.slice(i)
  if (isPalindrome(substr)) {
    console.log(strLength + i);
    break;
  }
}
