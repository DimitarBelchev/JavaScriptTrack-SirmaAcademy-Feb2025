function arrayManipulations(commands) {
  let arr = commands[0].split(" ").map(Number);

  for (let i = 1; i < commands.length; i++) {
    let commandParts = commands[i].split(" ");
    let command = commandParts[0];
    let num = parseInt(commandParts[1]);

    switch (command) {
      case "Add":
        arr.push(num);
        break;
      case "Remove":
        arr = arr.filter((el) => el !== num);
        break;
      case "RemoveAt":
        arr.splice(num, 1);
        break;
      case "Insert":
        let index = parseInt(commandParts[2]);
        arr.splice(index, 0, num);
        break;
    }
  }

  console.log(arr.join(" "));
}

arrayManipulations([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);
