// class Cat {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   meow() {
//     console.log(`${this.name}, age ${this.age} says meow`);
//   }
// }

// function createCats(catData) {
//   const cats = [];

//   for (const data of catData) {
//     const [name, age] = data.split(" ");
//     const cat = new Cat(name, parseInt(age));
//     cats.push(cat);
//   }

//   for (const cat of cats) {
//     cat.meow();
//   }
// }

// const input1 = ["Mellon 2", "Tom 3"];
// createCats(input1);

// const input2 = ["Branch 1", "Poppy 3", "Goldy 2"];
// createCats(input2);

function f(n) {
  j = 1;
  k = 2;
  for (let i = 1; i <= n; i++) {
    if (i > 2) {
      console.log(" ".repeat(j) + "#".repeat(i));
      j += k;
      k++;
    } else {
      console.log("#".repeat(i));
    }
  }
}

f(6);
f(4);
f(2);
