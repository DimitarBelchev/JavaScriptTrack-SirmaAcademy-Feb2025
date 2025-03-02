function lastKNumbersSequence(n, k) {
  const sequence = [1];

  for (let i = 1; i < n; i++) {
    const start = Math.max(0, i - k);
    const end = i;
    const sum = sequence.slice(start, end).reduce((acc, num) => acc + num, 0);
    sequence.push(sum);
  }

  console.log(sequence.join(" "));
}

lastKNumbersSequence(6, 3);
// lastKNumbersSequence(8, 2);
