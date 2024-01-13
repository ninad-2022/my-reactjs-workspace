//l23-array-fill.js

var arr = new Array(4);

arr.fill(10, 0, 2);
// arr.fill(value, startIndex, excluding_endIndex)
console.log(arr);

// arr = arr.fill().map(function (val, i) {
//   return i + 1;
// });
// console.log(arr);

// arr.fill(44, 5, 10);
// arr.fill(function (a) {
//   return a + 1;
// });
// console.log(arr);
