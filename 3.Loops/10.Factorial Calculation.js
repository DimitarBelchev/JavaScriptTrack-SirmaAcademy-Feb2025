function factorialCalculation(input) {
  if (input === 0 || input === 1) return 1;
  let result = 1;
  for (let i = 2; i <= input; i++) {
    result *= i;
  }
  return result;
}

console.log(factorialCalculation(5));
console.log(factorialCalculation(3));
console.log(factorialCalculation(0));
console.log(factorialCalculation(1));
console.log(factorialCalculation(10));
