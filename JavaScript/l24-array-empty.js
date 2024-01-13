//l24-array-empty.js
//empty an array

var arr = [10, 20, 30, 40, 50, 60];

// arr = arr[]; //new array
// to create empty array
// arr.splice(0); //method 1
// arr.length = 0; //method 2
// console.log(arr);

console.log(typeof [10]); //object
console.log(typeof { a: "" }); //object
var val = {};
console.log(Array.isArray(val));
