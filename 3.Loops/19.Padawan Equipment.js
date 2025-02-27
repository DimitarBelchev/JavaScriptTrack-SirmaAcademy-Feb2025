function padawanEquipment(money, students, sabrePrice, robePrice, beltPrice) {
  let sabresNeeded = Math.ceil(students * 1.1);
  let freeBelts = Math.floor(students / 6);

  let totalCost =
    sabresNeeded * sabrePrice +
    students * robePrice +
    (students - freeBelts) * beltPrice;

  if (totalCost <= money) {
    console.log(
      `The money is enough - it would cost ${totalCost.toFixed(2)}lv.`
    );
  } else {
    let neededMoney = (totalCost - money).toFixed(2);
    console.log(`George Lucas will need ${neededMoney}lv more.`);
  }
}

padawanEquipment(100, 2, 1.0, 2.0, 3.0);
padawanEquipment(100, 42, 12.0, 4.0, 3.0);
