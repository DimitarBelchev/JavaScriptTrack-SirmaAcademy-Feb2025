function climateZoneIdentifier(latitude, hemisphere) {
  if (latitude === 0) {
    return "Equator";
  } else if (Math.abs(latitude) > 66.5) {
    return "Arctic Zone";
  } else if (Math.abs(latitude) > 23.5) {
    return "Temperate Zone";
  } else {
    return "Tropic Zone";
  }
}

console.log(climateZoneIdentifier(70, "N"));
console.log(climateZoneIdentifier(45, "S"));
console.log(climateZoneIdentifier(10, "N"));
console.log(climateZoneIdentifier(0, "N"));
console.log(climateZoneIdentifier(-85, "S"));
