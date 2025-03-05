function sum(a, b) {
  return a + b;
}

function subtract(sumResult, c) {
  return sumResult - c;
}

function addAndSubtract(a, b, c) {
  const sumResult = sum(a, b);
  return subtract(sumResult, c);
}

console.log(addAndSubtract(23, 6, 10));
console.log(addAndSubtract(1, 17, 30));
console.log(addAndSubtract(42, 58, 100));
