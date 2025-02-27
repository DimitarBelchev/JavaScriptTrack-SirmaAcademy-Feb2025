function change(amount) {
  let coins = [1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
  let count = 0;
  let remaining = amount;

  for (let coin of coins) {
    while (remaining >= coin) {
      remaining = (remaining - coin).toFixed(2);
      count++;
    }
  }

  return count;
}

console.log(change(1.23));

console.log(change(0.56));

// console.log(change(2));
// console.log(change(2.73));
