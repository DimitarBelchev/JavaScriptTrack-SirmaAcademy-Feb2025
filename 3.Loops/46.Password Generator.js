function passwordGenerator(n, l) {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const passwords = [];

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      for (let k = 0; k < l; k++) {
        for (let m = 0; m < l; m++) {
          for (let o = i + 1; o <= n; o++) {
            passwords.push(`${i}${j}${letters[k]}${letters[m]}${o}`);
          }
        }
      }
    }
  }

  return passwords;
}

// console.log(generatePasswords(2, 4));
console.log(passwordGenerator(3, 1));
