function simpleCalculator(number1, number2, operation) {
  let result;

  switch (operation) {
    case "add":
      result = number1 + number2;
      break;
    case "subtract":
      result = number1 - number2;
      break;
    case "divide":
      if (number2 !== 0) {
        result = number1 / number2;
      } else {
        return "can't divide by zero";
      }
      break;
    case "multiply":
      result = number1 * number2;
      break;
  }

  return result.toFixed(2);
}

console.log(simpleCalculator(5, 5, "add"));
console.log(simpleCalculator(10, 12, "subtract"));
console.log(simpleCalculator(9, 3, "divide"));
console.log(simpleCalculator(5, 2, "divide"));
console.log(simpleCalculator(5, 0, "divide"));
console.log(simpleCalculator(3.1, 0.1, "multiply"));
