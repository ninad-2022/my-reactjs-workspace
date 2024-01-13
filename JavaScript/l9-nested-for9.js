/*
l9-nested-for9.js
print bellow pattern (I have failed to do that)
1   2   3   4
1   2   3
1   2
1
*/

for (var i = 4; i >= 1; --i) {
  var str = "";
  for (var j = 1; j <= i; ++j) str = str + " " + j;
  console.log(str);
}
