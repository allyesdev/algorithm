function reverseWords(s: string): string {
  const splitted = s.split(" ");
  let answer = "";
  for (const word of splitted) {
    if (!!word.trim()) answer = word + " " + answer;
  }
  return answer.trim();
}
