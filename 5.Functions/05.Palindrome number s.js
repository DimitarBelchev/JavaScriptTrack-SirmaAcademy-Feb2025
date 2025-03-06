function isPalindromeArray(arr) {
  return arr.map((number) => isPalindrome(number));
}

function isPalindrome(number) {
  const str = number.toString();
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

// console.log(isPalindromeArray([123, 323, 421, 121]));
console.log(isPalindromeArray([32, 2, 232, 1010]));
