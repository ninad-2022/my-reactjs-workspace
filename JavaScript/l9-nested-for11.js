/*
l9-nested-for11.js
5 
4  5 
3  4  5
2  3  4  5   
1  2  3  4  5
*/
for (var i = 5; i > 0; --i) {
  var str = " ";
  for (var j = i; j <= 5; ++j) str = str + " " + j;
  console.log(str);
}

// for (var i = 5; i > 0; i--) {
//     var str = "";
//     for (var j = i; j <= 5; j++) str = str + " " + j;
//     console.log(str)
// }
