class StringContainer {
  constructor(innerString, innerLength) {
    this.innerString = innerString;
    this.innerLength = innerLength;
  }

  increase(length) {
    this.innerLength += length;
  }

  decrease(length) {
    this.innerLength = Math.max(0, this.innerLength - length);
  }

  toString() {
    if (this.innerLength === 0) {
      return "...";
    }

    if (this.innerString.length > this.innerLength) {
      return this.innerString.slice(0, this.innerLength) + "...";
    }

    return this.innerString;
  }
}

let test = new StringContainer("Test", 5);
console.log(test.toString());

test.decrease(3);
console.log(test.toString());

test.decrease(5);
console.log(test.toString());

test.increase(4);
console.log(test.toString());
