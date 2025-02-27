function coinsAndNotes(ones, twos, fives, sum) {
  for (let i = 0; i <= ones; i++) {
    for (let j = 0; j <= twos; j++) {
      for (let k = 0; k <= fives; k++) {
        if (i * 1 + j * 2 + k * 5 === sum) {
          console.log(
            `${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${sum} lv.`
          );
        }
      }
    }
  }
}

coinsAndNotes(3, 2, 3, 10);

// coinsAndNotes(5, 3, 1, 7);
