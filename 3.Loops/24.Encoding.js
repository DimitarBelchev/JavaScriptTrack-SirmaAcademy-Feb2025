function encoding(number) {
  let strNum = number.toString();
  let reversedNum = strNum.split("").reverse().join("");

  for (let char of reversedNum) {
    let digit = parseInt(char);
    if (digit === 0) {
      console.log("ZERO");
    } else {
      let asciiChar = String.fromCharCode(33 + digit);
      console.log(asciiChar.repeat(digit));
    }
  }
}

encoding(2049);

// encoding(9347439);
