//l22-array-comb.js
var arr1 = [1, 2, 3, 4, 5, 6];
var arr2 = [10, 20, 30, 40, 50, 60];
var arr3 = [100, 200, 300, 400, 500, 600];

var arr4 = arr1.concat(arr2, arr3);
console.log(arr4);

var arr5 = [...arr1, ...arr2, ...arr3];
console.log(arr5);
