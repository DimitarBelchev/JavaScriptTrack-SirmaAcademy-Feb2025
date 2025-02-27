function potionBrewingDecision(ingredient1, ingredient2) {
  if (ingredient1 === "herbs") {
    if (ingredient2 === "water") {
      return "Health potion";
    } else if (ingredient2 === "oil") {
      return "Stealth potion";
    } else {
      return "Minor stamina potion";
    }
  } else if (ingredient1 === "berries") {
    if (ingredient2 === "sugar") {
      return "Speed potion";
    } else {
      return "Minor energy potion";
    }
  } else {
    return "No potion";
  }
}

console.log(potionBrewingDecision("herbs", "water"));
console.log(potionBrewingDecision("herbs", "oil"));
console.log(potionBrewingDecision("herbs", "banana"));
console.log(potionBrewingDecision("berries", "sugar"));
console.log(potionBrewingDecision("berries", "banana"));
console.log(potionBrewingDecision("herbs", "sugar"));
console.log(potionBrewingDecision("sugar", "salt"));
