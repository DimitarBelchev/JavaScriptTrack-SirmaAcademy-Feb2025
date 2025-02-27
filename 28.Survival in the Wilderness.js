function survivalInTheWilderness(timeOfDay, environment, item) {
  if (timeOfDay === "day") {
    if (environment === "forest") {
      if (item === "knife") {
        return "Hunt for food";
      } else if (item === "container") {
        return "Collect berries";
      } else {
        return "Explore";
      }
    } else if (environment === "desert") {
      if (item === "hat") {
        return "Search for water";
      } else {
        return "Find shade";
      }
    }
  } else if (timeOfDay === "night") {
    if (environment === "forest") {
      if (item === "firestarter") {
        return "Make a campfire";
      } else {
        return "Climb a tree for safety";
      }
    } else if (environment === "desert") {
      if (item === "blanket") {
        return "Sleep";
      } else {
        return "Keep moving to stay warm";
      }
    }
  }
  return "Invalid input";
}

console.log(survivalInTheWilderness("day", "forest", "knife"));
console.log(survivalInTheWilderness("day", "forest", "container"));
console.log(survivalInTheWilderness("night", "forest", "firestarter"));
console.log(survivalInTheWilderness("day", "forest", "bag"));
console.log(survivalInTheWilderness("night", "desert", "blanket"));
console.log(survivalInTheWilderness("day", "desert", "hat"));
console.log(survivalInTheWilderness("night", "desert", "sword"));
console.log(survivalInTheWilderness("night", "forest", "hat"));
