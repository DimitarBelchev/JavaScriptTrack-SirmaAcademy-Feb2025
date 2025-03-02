function firstAndLastKNumbers(k, arr) {
  const firstKElements = arr.slice(0, k).join(" ");
  const lastKElements = arr.slice(-k).join(" ");

  console.log(firstKElements);
  console.log(lastKElements);
}

firstAndLastKNumbers(2, [7, 8, 9]);
// firstAndLastKNumbers(3, [6, 7, 8, 9]);
