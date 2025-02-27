function faceOfFigures(figure, ...dimensions) {
  let area = 0;

  switch (figure) {
    case "square":
      let squareSide = dimensions[0];
      area = squareSide * squareSide;
      break;
    case "rectangle":
      let rectWidth = dimensions[0];
      let rectHeight = dimensions[1];
      area = rectWidth * rectHeight;
      break;
    case "circle":
      let radius = dimensions[0];
      area = Math.PI * radius * radius;
      break;
    case "triangle":
      let base = dimensions[0];
      let triangleHeight = dimensions[1];
      area = 0.5 * base * triangleHeight;
      break;
    default:
      throw new Error("Invalid figure type");
  }

  return area.toFixed(2);
}

console.log(faceOfFigures("square", 5));
console.log(faceOfFigures("square", 10));

console.log(faceOfFigures("rectangle", 10, 3.5));
console.log(faceOfFigures("rectangle", 10, 7));

console.log(faceOfFigures("triangle", 4.5, 20));
console.log(faceOfFigures("triangle", 4.5, 40));

console.log(faceOfFigures("circle", 10));
console.log(faceOfFigures("circle", 20));
