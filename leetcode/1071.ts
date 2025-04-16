function gcdOfStrings(str1: string, str2: string): string {
  let substr = "";
  for (let i = 0; i <= str1.length; i++) {
    const currentSubstr = str1.slice(0, i);
    const isDivisor = (str: string) => {
      return (
        str.length % currentSubstr.length === 0 &&
        currentSubstr.repeat(str.length / currentSubstr.length) === str
      );
    };
    if (isDivisor(str1) && isDivisor(str2)) {
      substr = currentSubstr;
    }
  }
  return substr;
}

/**
 * best solution
 * 댕천재..
function getGcd(a, b): number {
    if (b === 0) {
        return a
    }

    return getGcd(b, a % b)
}

function gcdOfStrings(str1: string, str2: string): string {
    if (str1 + str2 !== str2 + str1) {
        return ''
    }

    const maxLength = getGcd(str1.length, str2.length)
    return str1.substring(0, maxLength)
};
 */
