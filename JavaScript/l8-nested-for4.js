/*
l8-nested-for4.js
1   2   3   4
2   3   4   5
3   4   5   6
4   5   6   7
*/

for (var i = 0; i <= 3; i++) {
  var str = "";
  for (var j = 1; j <= 4; j++) str = str + " " + (i + j);
  console.log(str);
}
