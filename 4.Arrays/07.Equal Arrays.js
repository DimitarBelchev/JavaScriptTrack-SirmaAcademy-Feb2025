function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return `Arrays are not identical. Found difference at ${Math.min(
      arr1.length,
      arr2.length
    )} index`;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return `Arrays are not identical. Found difference at ${i} index`;
    }
  }

  let sum = arr1.map(Number).reduce((acc, num) => acc + num, 0);
  return `Arrays are identical. Sum: ${sum}`;
}

console.log(compareArrays(["10", "20", "30"], ["10", "20", "30"]));
// console.log(
//   compareArrays(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"])
// );
// console.log(compareArrays(["1"], ["10"]));
