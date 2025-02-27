function fibonacciSeq(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  let a = 0,
    b = 1;
  let sum = a + b;

  for (let i = 2; i < n; i++) {
    let next = a + b;
    sum += next;
    a = b;
    b = next;
  }

  return sum;
}

console.log(fibonacciSeq(3));
console.log(fibonacciSeq(5));
console.log(fibonacciSeq(1));
console.log(fibonacciSeq(0));
console.log(fibonacciSeq(10));
