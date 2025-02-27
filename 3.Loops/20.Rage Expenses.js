function rageExpenses(
  lostGames,
  headsetPrice,
  mousePrice,
  keyboardPrice,
  displayPrice
) {
  let headsetsTrashed = Math.floor(lostGames / 2);
  let miceTrashed = Math.floor(lostGames / 3);
  let keyboardsTrashed = Math.floor(lostGames / 6);
  let displaysTrashed = Math.floor(keyboardsTrashed / 2);

  let totalExpenses =
    headsetsTrashed * headsetPrice +
    miceTrashed * mousePrice +
    keyboardsTrashed * keyboardPrice +
    displaysTrashed * displayPrice;

  console.log(`Rage expenses: ${totalExpenses.toFixed(2)} lv.`);
}

rageExpenses(7, 2, 3, 4, 5);
rageExpenses(23, 12.5, 21.5, 40, 200);
