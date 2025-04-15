function mergeAlternately(word1: string, word2: string): string {
  let index1 = 0;
  let index2 = 0;
  let merged = "";

  while (index1 < word1.length && index2 < word2.length) {
    merged += word1[index1++];
    merged += word2[index2++];
  }

  while (index1 < word1.length) {
    merged += word1[index1++];
  }

  while (index2 < word2.length) {
    merged += word2[index2++];
  }

  return merged;
}
