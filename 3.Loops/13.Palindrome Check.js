function PalindromeCheck(str) {
  const cleanedStr = str.toLowerCase();

  const reversedStr = cleanedStr.split("").reverse().join("");

  return cleanedStr === reversedStr;
}

console.log(PalindromeCheck("radar"));
console.log(PalindromeCheck("hello"));
console.log(PalindromeCheck("racecar"));
console.log(PalindromeCheck("java"));
console.log(PalindromeCheck("madam"));
