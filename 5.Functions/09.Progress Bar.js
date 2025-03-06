function showProgressBar(percentage) {
  if (percentage < 0 || percentage > 100 || percentage % 10 !== 0)
    return "Invalid input";

  let progress = Math.floor(percentage / 10);
  let bar = "[" + "%".repeat(progress) + ".".repeat(10 - progress) + "]";

  if (percentage === 100) {
    return `${percentage}% ${bar}\nComplete!`;
  } else {
    return `${percentage}% ${bar}\nLoading...`;
  }
}

console.log(showProgressBar(30));
console.log(showProgressBar(50));
console.log(showProgressBar(100));
