/*
l8-nested-for3-even.js
2  4  6   8
2  4  6   8
2  4  6   8
*/

for (var i = 1; i <= 3; i++) {
  var str = "";
  for (var j = 2; j <= 8; j += 2) str = str + " " + j;
  console.log(str);
}
