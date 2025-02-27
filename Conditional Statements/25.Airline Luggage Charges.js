function airlineLuggageCharges(weight, dimensions) {
  const weightFee = weight > 50 ? 100 : 0;

  const totalDimension = dimensions.reduce(
    (sum, dimension) => sum + dimension,
    0
  );
  const oversizeFee = calculateOversizeFee(totalDimension);

  const handlingFee = weightFee > 0 && oversizeFee > 0 ? 50 : 0;

  const totalFee = weightFee + oversizeFee + handlingFee;

  console.log(
    `$${totalFee} (${weightFee > 0 ? "Overweight" : ""} ${
      oversizeFee > 0 ? "Oversize" : ""
    } ${handlingFee > 0 ? "Handling" : ""})`
  );
}

function calculateOversizeFee(totalDimension) {
  const excess = totalDimension - 158;
  if (excess <= 0) return 0;
  if (excess <= 20) return 50;
  if (excess <= 50) return 100;
  return 200;
}

airlineLuggageCharges(52, [50, 55, 55]);
airlineLuggageCharges(48, [45, 65, 70]);
airlineLuggageCharges(55, [50, 70, 70]);
