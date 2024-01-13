// reverse odd digits from num = 12345678 number

// var num = 12345678;
// var rnum = 0;
// while (num > 0) {
//     var rem = num % 10;
//     num = Math.floor(num / 10);
//     if ( rem % 2 != 0) {
//         rnum = rnum * 10 + rem;
//     }
// }
// console.log(rnum);

var num = 123456;
var rr = 0;
while (num > 0) {
  var rnum = num % 10; //6
  num = Math.floor(num / 10); //12345
  rr = rr * 10 + rnum; //
}
console.log(rr);
