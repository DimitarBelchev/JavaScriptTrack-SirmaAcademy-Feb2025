function architecturalEraIdentifier(year, material) {
  if (year < 500 && material === "stone") {
    return "Ancient";
  } else if (year >= 500 && year <= 1500 && material === "stone") {
    return "Medieval";
  } else if (year >= 1500 && year <= 1800 && material === "wood") {
    return "Colonial";
  } else if (year >= 1800 && year <= 1900 && material === "steel") {
    return "Industrial";
  } else if (year >= 1900 && material === "steel") {
    return "Modern";
  } else {
    return "Uncertain";
  }
}

console.log(architecturalEraIdentifier(300, "stone"));
console.log(architecturalEraIdentifier(1500, "wood"));
console.log(architecturalEraIdentifier(1500, "stone"));
console.log(architecturalEraIdentifier(2000, "steel"));
console.log(architecturalEraIdentifier(1100, "wood"));
