function newBuilding(floors, rooms) {
  for (let floor = floors; floor > 0; floor--) {
    let line = "";
    for (let room = 0; room < rooms; room++) {
      if (floor === floors) {
        line += `L${floor}${room} `;
      } else if (floor % 2 === 0) {
        line += `O${floor}${room} `;
      } else {
        line += `A${floor}${room} `;
      }
    }
    console.log(line.trim());
  }
}

newBuilding(6, 4);

newBuilding(3, 3);

newBuilding(4, 4);
