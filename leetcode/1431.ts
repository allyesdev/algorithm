function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const greatestNum = Math.max(...candies);
  const answer = [];

  for (let i = 0; i < candies.length; i++) {
    answer.push(candies[i] + extraCandies >= greatestNum);
  }
  return answer;
}
