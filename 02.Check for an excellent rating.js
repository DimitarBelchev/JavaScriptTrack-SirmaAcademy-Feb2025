function checkRating(rating) {
  return rating >= 5.5 ? "Excellent!" : "no output";
}

console.log(checkRating(6));
console.log(checkRating(5.5));
console.log(checkRating(5.51));
console.log(checkRating(5.501));

console.log(checkRating(5.49));
console.log(checkRating(5));
