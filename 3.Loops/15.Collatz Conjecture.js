function collatzConjecture(n) {
  let sequence = [];
  while (n !== 1) {
    sequence.push(n);
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
  }
  sequence.push(1);
  console.log(sequence.join(" "));
}

collatzConjecture(6);
collatzConjecture(12);
collatzConjecture(9);
collatzConjecture(200);
collatzConjecture(15);
