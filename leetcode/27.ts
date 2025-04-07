function removeElement(nums: number[], val: number): number {
  let i = 0;
  let pointer = nums.length - 1;

  for (; i <= pointer; i++) {
    while (nums[pointer] === val) {
      pointer--;
    }
    if (pointer < i) break;
    if (nums[i] === val) {
      nums[i] = nums[pointer];
      nums[pointer] = val;
    }
  }
  return nums[pointer] === val ? (pointer < 0 ? 0 : pointer) : pointer + 1;
}

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
console.log(removeElement([1], 1));
console.log(removeElement([2], 3));
console.log(removeElement([3, 3], 3));
console.log(removeElement([2, 2, 3], 2));
