// l6-mod.js
// for (var x = 1; x >= 100; ++x) {
//   switch (x) {
//     case x % 3 == 0: {
//       console.log("Topper");
//       break;
//     }
//     case x % 5 == 0: {
//       console.log("Skills");
//       break;
//     }
//     case x % 3 == 0 && x % 5 == 0: {
//       console.log("Topper skills");
//       break;
//     }
//   }
// }

for (i = 1; i <= 100; ++i) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i + " -Topper skills ");
  } else if (i % 3 == 0) {
    console.log(i + " -Topper ");
  } else if (i % 5 == 0) {
    console.log(i + " -Skills ");
  }
}
