// https://leetcode.com/problems/maximum-number-of-points-from-grid-queries

/**
 * breadth first search
 */
const { MinPriorityQueue } = require("@datastructures-js/priority-queue");
function maxPoints(grid: number[][], queries: number[]): number[] {
  const answer = [];
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const needVisit = new MinPriorityQueue(
    (item: { value: number }) => item.value
  );

  for (let i = 0; i < queries.length; i++) {
    const query = queries[i];
    const visited: boolean[][] = grid.map((row) => {
      return row.map((col) => {
        return false;
      });
    });
    let points = 0;
    needVisit.clear();
    needVisit.enqueue({
      x: 0,
      y: 0,
      value: grid[0][0],
    });

    while (needVisit.size() > 0 && needVisit.front().value < query) {
      const currentNode = needVisit.dequeue()!;
      const currentValue = grid[currentNode.y][currentNode.x];
      if (visited[currentNode.y][currentNode.x]) continue;
      visited[currentNode.y][currentNode.x] = true;

      const isFirst = currentNode.x === 0 && currentNode.y === 0 ? true : false;
      let isAdjacentVisited = false;
      for (const [dy, dx] of directions) {
        const ny = currentNode.y + dy;
        const nx = currentNode.x + dx;
        if (ny >= 0 && ny < grid.length && nx >= 0 && nx < grid[0].length) {
          if (!visited[ny][nx]) {
            needVisit.enqueue({ x: nx, y: ny, value: grid[ny][nx] });
          }
          isAdjacentVisited = isAdjacentVisited || visited[ny][nx];
        }
      }
      if (query > currentValue && (isAdjacentVisited || isFirst)) {
        points++;
      }
    }
    answer.push(points);
  }
  return answer;
}

// test cases
console.log(
  maxPoints(
    [
      [1, 2, 3],
      [2, 5, 7],
      [3, 5, 1],
    ],
    [5, 6, 2]
  ),
  "expected: [5, 8, 1]"
);

console.log(
  maxPoints(
    [
      [5, 2, 1],
      [1, 1, 2],
    ],
    [3]
  ),
  "expected: [0]"
);

// console.log(
//   maxPoints(
//     [
//       [
//         249472, 735471, 144880, 992181, 760916, 920551, 898524, 37043, 422852,
//         194509, 714395, 325171,
//       ],
//       [
//         295872, 922051, 900801, 634980, 644237, 912433, 857189, 98466, 725226,
//         984534, 370121, 399006,
//       ],
//       [
//         618420, 573065, 587011, 298153, 694872, 12760, 880413, 593508, 474772,
//         291113, 852444, 77998,
//       ],
//       [
//         67650, 426517, 146447, 190319, 379151, 184754, 479219, 106819, 138473,
//         865661, 799297, 228827,
//       ],
//       [
//         390392, 789371, 772048, 730506, 7144, 862164, 650590, 21524, 879440,
//         396198, 408897, 851020,
//       ],
//       [
//         932044, 662093, 436861, 246956, 128943, 167432, 267483, 148325, 458128,
//         418348, 900594, 831373,
//       ],
//       [
//         742255, 795191, 598857, 441846, 243888, 777685, 313717, 560586, 257220,
//         488025, 846817, 554722,
//       ],
//       [
//         252507, 621902, 87704, 599753, 651175, 305330, 620166, 631193, 385405,
//         183376, 432598, 706692,
//       ],
//       [
//         984416, 996917, 586571, 324595, 784565, 300514, 101313, 685863, 703194,
//         729430, 732044, 349877,
//       ],
//       [
//         155629, 290992, 539879, 173659, 989930, 373725, 701670, 992137, 893024,
//         455455, 454886, 559081,
//       ],
//       [
//         252809, 641084, 632837, 764260, 68790, 732601, 349257, 208701, 613650,
//         429049, 983008, 76324,
//       ],
//       [
//         918085, 126894, 909148, 194638, 915416, 225708, 184408, 462852, 40392,
//         964501, 436864, 785076,
//       ],
//       [
//         875475, 442333, 111818, 494972, 486734, 901577, 46210, 326422, 603800,
//         176902, 315208, 225178,
//       ],
//       [
//         171174, 458473, 744971, 872087, 680060, 95371, 806370, 322605, 349331,
//         736473, 306720, 556064,
//       ],
//       [
//         207705, 587869, 129465, 543368, 840821, 977451, 399877, 486877, 327390,
//         8865, 605705, 481076,
//       ],
//     ],
//     [690474, 796832, 913701, 939418, 46696, 266869, 150594, 948153, 718874]
//   ),
//   "expected: [85,145,166,171,0,1,0,171,126]"
// );
