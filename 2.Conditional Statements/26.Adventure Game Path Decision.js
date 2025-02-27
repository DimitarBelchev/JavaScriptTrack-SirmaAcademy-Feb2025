function adventureGamePathDecision(rightHand, leftHand) {
  if (rightHand === "sword") {
    if (leftHand === "shield") {
      return "Path to the castle";
    } else {
      return "Path to the forest";
    }
  } else if (rightHand === "map") {
    if (leftHand === "coins") {
      return "Go to the town";
    } else {
      return "Camp at the current spot and prepare for the next day";
    }
  } else {
    return "Wander aimlessly";
  }
}

console.log(adventureGamePathDecision("sword", "shield"));
console.log(adventureGamePathDecision("map", "coins"));
console.log(adventureGamePathDecision("torch", "flower"));
console.log(adventureGamePathDecision("sword", "pouch"));
console.log(adventureGamePathDecision("map", "compass"));
