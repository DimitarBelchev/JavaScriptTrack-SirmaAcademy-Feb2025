function validatePassword(password) {
  let messages = [];

  if (!isLengthValid(password)) {
    messages.push("Password must be between 6 and 10 characters");
  }
  if (!isConsistingOfLettersAndDigits(password)) {
    messages.push("Password must consist only of letters and digits");
  }
  if (!hasAtLeastTwoDigits(password)) {
    messages.push("Password must have at least 2 digits");
  }

  if (messages.length === 0) {
    console.log("Password is valid");
  } else {
    messages.forEach((message) => console.log(message));
  }
}

function isLengthValid(password) {
  return password.length >= 6 && password.length <= 10;
}

function isConsistingOfLettersAndDigits(password) {
  return /^[A-Za-z0-9]+$/.test(password);
}

function hasAtLeastTwoDigits(password) {
  return (password.match(/\d/g) || []).length >= 2;
}

validatePassword("pass");
validatePassword("APass123");
validatePassword("Pa$s$s");
