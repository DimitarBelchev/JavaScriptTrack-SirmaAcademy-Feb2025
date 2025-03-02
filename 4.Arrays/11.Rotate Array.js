function rotateArray(arr, rotations) {
  const n = arr.length;
  rotations = rotations % n;
  const rotatedArray = arr
    .slice(-rotations)
    .concat(arr.slice(0, n - rotations));
  console.log(rotatedArray.join(" "));
}

rotateArray(["1", "2", "3", "4"], 2);
rotateArray(["Banana", "Orange", "Coconut", "Apple"], 15);
