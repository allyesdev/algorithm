function majorityElement(nums: number[]): number {
  const frequencyMap: Record<number, number> = {};
  let majorityFrequency = -1;
  let majorityElement = -1;

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    frequencyMap[currentNum] = (frequencyMap[currentNum] || 0) + 1;
    if (frequencyMap[currentNum] > majorityFrequency) {
      majorityFrequency = frequencyMap[currentNum];
      majorityElement = currentNum;
    }
  }

  return majorityElement;
}

console.log(majorityElement([3, 2, 3]));
