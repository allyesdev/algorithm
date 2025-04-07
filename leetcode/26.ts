function removeDuplicates(nums: number[]): number {
  let i = 0;
  let current = nums[i];
  let pointer = 0;

  for (; i <= pointer; i++) {
    current = nums[i];
    while (nums[pointer] <= current) {
      pointer++;
    }
    if (pointer >= nums.length) break;
    console.log(nums, pointer);
    nums[i + 1] = nums[pointer];
  }
  return i + 1;
}

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates([1, 2]));
