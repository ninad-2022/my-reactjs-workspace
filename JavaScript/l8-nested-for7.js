/*
l8-nested-for7.js
 1 
 1 2
 1 2 3
 1 2 3 4
 1 2 3 4 5

*/

for (var i = 1; i <= 5; ++i) {
  var str = "";
  for (var j = 1; j <= i; j++) str = str + " " + j;
  console.log(str);
}

// for (var i = 1; i <= 5; ++i) {
//     var str = "";
//     for (var j = 1; j <= i; j++) str = str + " " + j;
//     console.log(str);
// }
