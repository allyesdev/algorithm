function solution(gridStr) {
  const answer = [];
  const N = gridStr.length;
  const M = gridStr[0].length;
  let grid = gridStr.map((str) => str.split(""));

  const directions = {
    'S': {
      't': [1, 0, 't'],
      'b': [-1, 0, 'b'],
      'l': [0, 1, 'l'],
      'r': [0, -1, 'r']
    },
    'L': {
      't': [0, 1, 'l'],
      'b': [0, -1, 'r'],
      'l': [-1, 0, 'b'],
      'r': [1, 0, 't']
    },
    'R': {
      't': [0, -1, 'r'],
      'b': [0, 1, 'l'],
      'l': [1, 0, 't'],
      'r': [-1, 0, 'b']
    },
  }

  const visited = new Set();
  const dir = ['t', 'b', 'l', 'r'];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      for (const d of dir) {
        const init = [i, j, d];
        if (visited.has(JSON.stringify(init))) continue;
        const queue = [init];
        let len = 1;
        while (queue.length > 0) {
          const cur = queue.shift();
          const curChar = grid[cur[0]][cur[1]];
          visited.add(JSON.stringify(cur));

          const nextDir = directions[curChar][cur[2]];
          let nextX, nextY;
          let nextD = nextDir[2];
          if (cur[0] + nextDir[0] >= N) {
            nextY = 0;
            nextD = 't';
          } else if (cur[0] + nextDir[0] < 0) {
            nextY = N - 1;
            nextD = 'b';
          } else {
            nextY = cur[0] + nextDir[0];
          }
          if (cur[1] + nextDir[1] >= M) {
            nextX = 0;
            nextD = 'l';
          } else if (cur[1] + nextDir[1] < 0) {
            nextX = M - 1;
            nextD = 'r';
          } else {
            nextX = cur[1] + nextDir[1];
          }
          const next = [nextY, nextX, nextD];
          if (!visited.has(JSON.stringify(next))) {
            queue.push(next);
            len++;
          } else if (!queue.length && JSON.stringify(next) === JSON.stringify(init)) {
            len && answer.push(len);
          }
        }
      }
    }
  }

  return answer.sort((a,b) => a-b);
}

console.log(solution(["S", "S"]));