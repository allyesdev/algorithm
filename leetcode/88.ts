function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let index: number = nums1.length - 1;
  let index1: number = m - 1;
  let index2: number = nums2.length - 1;

  while (index2 >= 0) {
    const max = Math.max(
      index1 >= 0 ? nums1[index1] : nums2[index2],
      nums2[index2]
    );

    if (index1 >= 0 && nums1[index1] === max) {
      index1--;
    } else if (nums2[index2] === max) {
      index2--;
    }
    nums1[index--] = max;
  }
  console.log(nums1);
}

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3);
merge([0, 0, 3, 0, 0, 0, 0, 0, 0], 3, [-1, 1, 1, 1, 2, 3], 6);
