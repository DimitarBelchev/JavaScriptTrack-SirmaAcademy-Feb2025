function factorial(num) {
  if (num === 0 || num === 1) return 1;
  return num * factorial(num - 1);
}

function factorialDivision(num1, num2) {
  const factorial1 = factorial(num1);
  const factorial2 = factorial(num2);
  const result = factorial1 / factorial2;
  return result.toFixed(2);
}

console.log(factorialDivision(5, 2));
console.log(factorialDivision(6, 2));
