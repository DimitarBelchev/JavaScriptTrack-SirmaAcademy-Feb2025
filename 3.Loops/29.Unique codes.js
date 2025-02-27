function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

function uniqueCodes(upperLimit1, upperLimit2, upperLimit3) {
  let primes = [2, 3, 5, 7];

  for (let i = 2; i <= upperLimit1; i++) {
    if (i % 2 !== 0) continue;
    for (let j = 2; j <= upperLimit2; j++) {
      if (!primes.includes(j)) continue;
      for (let k = 2; k <= upperLimit3; k++) {
        if (k % 2 !== 0) continue;
        console.log(`${i} ${j} ${k}`);
      }
    }
  }
}

uniqueCodes(3, 5, 5);

// uniqueCodes(6, 2, 6);
