function processOddNumbers(arr) {
  const result = arr
    .filter((_, index) => index % 2 !== 0)
    .map((num) => num * 2)
    .reverse()
    .join(" ");

  console.log(result);
}

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);
