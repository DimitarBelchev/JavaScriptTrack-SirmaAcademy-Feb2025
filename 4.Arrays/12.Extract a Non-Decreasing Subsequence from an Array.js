function extractNonDecreasingSubsequence(arr) {
  let result = [];
  let currentMax = Number.NEGATIVE_INFINITY;

  for (let num of arr) {
    if (num >= currentMax) {
      result.push(num);
      currentMax = num;
    }
  }

  console.log(result.join(" "));
}

extractNonDecreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extractNonDecreasingSubsequence([1, 2, 3, 4]);
extractNonDecreasingSubsequence([20, 3, 2, 15, 6, 1]);
