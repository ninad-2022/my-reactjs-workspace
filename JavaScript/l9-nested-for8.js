//value is changing row wise
/*
l9-nested-for8.js
 1
 2 2
 3 3 3
 4 4 4 4
 5 5 5 5 5
*/

for (var i = 1; i <= 5; ++i) {
  var str = "";
  for (var j = 1; j <= i; j++) str = str + " " + i;
  console.log(str);
}
