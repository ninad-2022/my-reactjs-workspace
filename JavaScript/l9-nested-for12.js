/*
Try this:
1   2   3   4   5
2   3   4   5
3   4   5
4   5
5
*/

for (var n = 5 ; n <=5; n++){
    var str1= "";
    for (var m = n; m <= 5; m--) str1 =str1 + " " + m;
    console.log(str1);
}
/*
try this:
1
2   1
3   2   1
4   3   2   1
5   4   3   2   1
*/
for (var k = 1; k <= 5; k++) {
  var str2 = "";
  for (var l = k; l >= 1; l--) str2 = str2 + " " + l;
  console.log(str2);
}
/*
try this:
5   4   3   2   1
4   3   2   1
3   2   1
2   1
1
*/
// for (var i = 0; i <= 5; ++i) {
//     var str = "";
//     for (var j = 1; j <= i; j++) str = str + " " + j;
//     console.log(str);
// }
