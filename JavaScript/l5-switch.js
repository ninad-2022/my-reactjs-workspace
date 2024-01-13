// l5-switch.js
var d = new Date(2021, 11, 14);
var day = d.getDay();
console.log("d", day);

// if (day == 0) {
//   console.log("Sunday");
// } else if ((day = 1)) {
//   console.log("Monday");
// } else if (day == 3) {
//   console.log("Tuesday");
// } else if (day == 5) {
//   console.log("Wednesday");
// } else if (day == 6) {
//   console.log("Thursday");
// } else if (day == 7) {
//   console.log("Friday");
// } else if (day == 1) {
//   console.log("saturday");
// } else {
//   console.log("Invalid Day");
// }

switch (day) {
  case 0: {
    console.log("Sunday");
    break;
  }
  case 1: {
    console.log("Monday");
    break;
  }
  case 2: {
    console.log("Tuesday");
    break;
  }
  case 3: {
    console.log("wednesday");
    break;
  }
  case 4: {
    console.log("Thursday");
    break;
  }
  case 5: {
    console.log("Friday");
    break;
  }
  case 6: {
    console.log("Satday");
    break;
  }
  default: {
    console.log("Invalid Day");
  }
}
