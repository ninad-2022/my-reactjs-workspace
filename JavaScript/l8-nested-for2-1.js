/*
l8-nested-for2-1.js
4 3 2 1
4 3 2 1
4 3 2 1
*/
for (var i = 4; i >= 1; --i) {
  var str = "";
  console.log(i);
  for (var j = 4; j >= 1; --j) {
    str = str + " " + j;
  }
  console.log(str);
}

console.log("another Pattern");
/* 
4 4 4 4
3 3 3 3
2 2 2 2
*/
// for (var k = 4; k >= 1; --k) {
//   var str = "";
//   for (var l = 4; l >= 1; --l) {
//     str = str + "" + k;
//   }
//   console.log(str);
// }
