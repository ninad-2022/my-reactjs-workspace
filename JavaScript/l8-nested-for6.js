/*
l8-nested-for6.js
10  20  30  40
20  30  40  50
30  40  50  60
40  50  60  70
*/
for (var i = 0; i <= 3; ++i) {
  var str = "";
  for (var j = 1; j <= 4; j++) {
    str = str + " " + (i + j) * 10;
  }
  console.log(str);
}

// for (var i = 0; i <= 3; i++) {
//   var str = "";
//   for (var j = 1; j <= 4; j++) str = str + " " + (i + j) * 10;
//   console.log(str);
// }

console.log("Below method is given by sir");

/* by sir's method */
for (var k = 0; k <= 30; k += 10) {
  var str = "";
  for (var l = 10; l <= 40; l += 10) str = str + " " + (k + l);
  console.log(str);
}
