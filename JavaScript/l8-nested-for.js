/*
l8-nested-for.js
1   1   1   1
2   2   2   2
3   3   3   3
4   4   4   4
*/

for (var i = 1; i <= 4; i++) {
  var str = "";
  for (var j = 1; j <= 4; ++j) {
    str = str + " " + i;
  }
  console.log(str);
}
