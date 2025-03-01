function reverseArrayOfNumbers(n, array) {
  const result = array.slice(0, n).reverse();
  console.log(result.join(" "));
}

reverseArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseArrayOfNumbers(4, [-1, 20, 99, 5]);
reverseArrayOfNumbers(2, [66, 43, 75, 89, 47]);
