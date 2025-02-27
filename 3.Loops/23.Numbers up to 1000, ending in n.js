function printNumbersTo1000EndingInN(n) {
  for (let i = 1; i <= 1000; i++) {
    if (i % 10 === n) {
      console.log(i);
    }
  }
}

printNumbersTo1000EndingInN(6);
printNumbersTo1000EndingInN(8);
