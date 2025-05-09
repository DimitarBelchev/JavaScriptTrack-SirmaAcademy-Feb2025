function magicNumber(start, end, magicNumber) {
  let combinationCount = 0;

  for (let i = start; i <= end; i++) {
    for (let j = start; j <= end; j++) {
      combinationCount++;
      if (i + j === magicNumber) {
        console.log(
          `Combination ${combinationCount} - (${i} + ${j} = ${magicNumber})`
        );
        return;
      }
    }
  }
  console.log(
    `${combinationCount} combinations - neither equals ${magicNumber}`
  );
}

magicNumber(1, 10, 5);
magicNumber(23, 24, 20);
magicNumber(1, 2, 3);
