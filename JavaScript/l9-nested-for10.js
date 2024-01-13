/*
l9-nested-for10.js
5   5   5   5   5
4   4   4   4
3   3   3
2   2
1
*/

for (var i = 5; i >= 1; i--) {
  var str = "";
  for (var j = i; j >= 1; j--) str = str + " " + i;
  console.log(str);
}
