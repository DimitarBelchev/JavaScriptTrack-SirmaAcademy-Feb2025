function longestSequence(arr) {
  let longest = [];
  let current = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === 0 || arr[i] === arr[i - 1]) {
      current.push(arr[i]);
    } else {
      if (current.length > longest.length) {
        longest = current;
      }
      current = [arr[i]];
    }
  }

  if (current.length > longest.length) {
    longest = current;
  }

  console.log(longest.join(" "));
}

longestSequence([2, 2, 2, 3, 4, 4, 2, 2, 2, 1]);
longestSequence([1, 1, 1, 2, 3, 1, 3, 3, 1, 1]);
longestSequence([1, 1, 2, 3, 4, 5, 6, 2, 2]);
longestSequence([4, 4, 4, 4]);
longestSequence([0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);
