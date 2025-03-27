/** 다 때려박아 풀기 time limit exceeded
function minimumIndex(nums: number[]): number {
  const getDominantValue = (array: number[]) => {
    if (array.length === 0) {
      return -1;
    }

    const sortedArray = array.sort((a, b) => a - b);
    let countOfFrequency = [1];
    let mostFrequentCount = 1;
    let mostFrequentValue = sortedArray[0];

    for (let i = 1; i < sortedArray.length; i++) {
      const previousCount = countOfFrequency[i - 1];
      const previousValue = sortedArray[i - 1];
      const currentValue = sortedArray[i];
      if (previousValue === currentValue) {
        countOfFrequency.push(previousCount + 1);
      } else {
        countOfFrequency.push(1);
      }
      if (countOfFrequency[i] > mostFrequentCount) {
        mostFrequentCount = countOfFrequency[i];
        mostFrequentValue = currentValue;
      }
    }

    if (mostFrequentCount * 2 > array.length) {
      return mostFrequentValue;
    }
    return -1;
  };

  for (let i = 1; i < nums.length + 1; i++) {
    const subArray1 = nums.slice(0, i);
    const subArray2 = nums.slice(i);

    let currentDominant = [-1, -1];
    currentDominant[0] = getDominantValue(subArray1);
    currentDominant[1] = getDominantValue(subArray2);

    if (
      currentDominant[0] !== -1 &&
      currentDominant[0] === currentDominant[1]
    ) {
      return i - 1;
    }
  }
  return -1;
}
 */

/** solution */
function minimumIndex(nums: number[]): number {
  const firstMap: Record<number, number> = {};
  const secondMap: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    const currentValue = nums[i];
    secondMap[currentValue] = (secondMap[currentValue] || 0) + 1;
  }

  for (let i = 0; i < nums.length; i++) {
    const currentValue = nums[i];
    secondMap[currentValue] -= 1;
    firstMap[currentValue] = (firstMap[currentValue] || 0) + 1;

    if (
      firstMap[currentValue] * 2 > i + 1 &&
      secondMap[currentValue] * 2 > nums.length - i - 1
    ) {
      return i;
    }
  }
  return -1;
}

// case test1
console.log(minimumIndex([1, 2, 2, 2]), "should be 2");

// case test2
console.log(minimumIndex([2, 1, 3, 1, 1, 1, 7, 1, 2, 1]), "should be 4");

// case test3
console.log(minimumIndex([3, 3, 3, 3, 7, 2, 2]), "should be -1");

// case test4
console.log(minimumIndex([1, 1, 1]), "should be 0");
