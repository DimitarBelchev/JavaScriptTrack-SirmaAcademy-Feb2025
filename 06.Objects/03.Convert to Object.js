function convertAndPrint(jsonText) {
  const obj = JSON.parse(jsonText);
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`${key}: ${obj[key]}`);
    }
  }
}

convertAndPrint('{"name": "Ivan", "age": 40, "town": "Sofia"}');
convertAndPrint('{"firstName": "Ivan", "lastName": "Ivanov"}');
