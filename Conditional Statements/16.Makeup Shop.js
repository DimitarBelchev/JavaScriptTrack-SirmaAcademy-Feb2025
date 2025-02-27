function makeupShop(
  renovationCost,
  countPowder,
  countLipstick,
  countSpiral,
  countShadows,
  countConcealer
) {
  const pricePowder = 2.6;
  const priceLipstick = 3.0;
  const priceSpiral = 4.1;
  const priceShadows = 8.2;
  const priceConcealer = 2.0;

  const totalPowder = countPowder * pricePowder;
  const totalLipstick = countLipstick * priceLipstick;
  const totalSpiral = countSpiral * priceSpiral;
  const totalShadows = countShadows * priceShadows;
  const totalConcealer = countConcealer * priceConcealer;

  let totalAmount =
    totalPowder + totalLipstick + totalSpiral + totalShadows + totalConcealer;

  const totalProducts =
    countPowder + countLipstick + countSpiral + countShadows + countConcealer;

  if (totalProducts >= 50) {
    totalAmount *= 0.75;
  }

  const rent = totalAmount * 0.1;
  const profit = totalAmount - rent;

  if (profit >= renovationCost) {
    const remainingMoney = profit - renovationCost;
    return `Yes! ${remainingMoney.toFixed(2)} BGN left.`;
  } else {
    const neededMoney = renovationCost - profit;
    return `Not enough money! ${neededMoney.toFixed(2)} BGN needed.`;
  }
}

console.log(makeupShop(40.8, 20, 25, 30, 50, 10));
console.log(makeupShop(320, 8, 2, 5, 5, 1));
