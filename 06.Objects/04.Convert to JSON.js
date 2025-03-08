function convertToJSON(name, surname, eyeColor) {
  let person = {
    name: name,
    lastName: surname,
    eyeColor: eyeColor,
  };
  console.log(JSON.stringify(person));
}

convertToJSON("Ivan", "Ivanov", "blue");
convertToJSON("Maria", "Petrova", "brown");
