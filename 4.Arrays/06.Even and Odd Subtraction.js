function evenOddSubtraction(arr) {
  let evenSum = arr
    .filter((num) => num % 2 === 0)
    .reduce((sum, num) => sum + num, 0);
  let oddSum = arr
    .filter((num) => num % 2 !== 0)
    .reduce((sum, num) => sum + num, 0);
  return evenSum - oddSum;
}

console.log(evenOddSubtraction([1, 2, 3, 4, 5, 6]));
console.log(evenOddSubtraction([3, 5, 7, 9]));
console.log(evenOddSubtraction([2, 4, 6, 8, 10]));
