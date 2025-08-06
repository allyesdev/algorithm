function combination(n, k) {
    if (k > n) return 0n;
    let res = 1n;
    for (let i = 1n; i <= k; i++) {
      res = res * BigInt(n) / i;
      n--;
    }
    return res;
}

function solution(n) {
    let answer = 0n;
    
    for (let i = 0n; i <= BigInt(n) / 2n; i++) {
        answer += combination(BigInt(n) - i, i)
        answer %= 1234567n
    }
    return answer;
}