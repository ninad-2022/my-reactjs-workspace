//l22-array-subarray.js
//slice() Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array.
var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var arr1 = arr.slice(0, 4);
var arr2 = arr.slice(4, 8);
var arr3 = arr.slice(8); //slice is exclusive
console.log(arr1);
console.log(arr2);
console.log(arr3);
