function findShortestAndLongestWords(sentence) {
  const words = sentence.match(/\b\w+\b/g);
  if (!words) return { longest: "", shortest: "" };

  let shortest = words[0];
  let longest = words[0];

  words.forEach((word) => {
    if (word.length < shortest.length) {
      shortest = word;
    } else if (word.length > longest.length) {
      longest = word;
    }
  });

  return {
    longest: longest,
    shortest: shortest,
  };
}

console.log(
  findShortestAndLongestWords("Hello how are you today? I hope you are fine ")
);
console.log(
  findShortestAndLongestWords(
    "Lorem Ipsum is dummy text of the typesetting industry."
  )
);
