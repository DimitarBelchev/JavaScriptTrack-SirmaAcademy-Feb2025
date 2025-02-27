function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function evenPairs(initial1, initial2, diff1, diff2) {
  let end1 = initial1 + diff1;
  let end2 = initial2 + diff2;

  for (let i = initial1; i <= end1; i++) {
    for (let j = initial2; j <= end2; j++) {
      if (isPrime(i) && isPrime(j)) {
        console.log(`${i}${j}`);
      }
    }
  }
}

evenPairs(10, 20, 5, 5);

// evenPairs(10, 30, 9, 6);
