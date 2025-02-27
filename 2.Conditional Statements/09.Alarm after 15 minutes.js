function alarmAfter15Minutes(inputHours, inputMinutes) {
  let totalInputMinutes = inputHours * 60 + inputMinutes + 15;

  let hours = Math.floor(totalInputMinutes / 60) % 24;
  let minutes = totalInputMinutes % 60;

  let resultHours = (hours < 10 ? "0" : "") + hours;
  let resultMinutes = (minutes < 10 ? "0" : "") + minutes;

  return resultHours + ":" + resultMinutes;
}

console.log(alarmAfter15Minutes(1, 47));
console.log(alarmAfter15Minutes(0, 2));
console.log(alarmAfter15Minutes(23, 59));
console.log(alarmAfter15Minutes(11, 7));
console.log(alarmAfter15Minutes(12, 48));
