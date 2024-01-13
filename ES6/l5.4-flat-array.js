//l5.4-flat-array.js

//for converting nsested array into flat aaray
const arr = [1, 2, 4, [1, 2, [1, , 9, 4], 3, 4], 7, 9];
console.log(arr.flat());
console.log(arr.flat(2));
console.log(arr.flat(Infinity));

//also remove blank and undefiend spaces
const arr2 = [10, 20, "", , 30];
console.log(arr2);
console.log(arr2.flat(2));
