// l2.2-spread.js

var arr = [10, 20, 30];
//it prints list
console.log(arr);

//it prints list elements only
console.log(...arr);

const str = "Ninad Bhoir";
console.log(str);
//split and Prints
console.log(...str);

const arry1 = [11, 22, 33, 44, 55];
const arry2 = [66, 77, 88, 99, 100];

//it gives only elements
console.log(...arry1, ...arry2);

//we are creating a new array here. So, output will be new array
const arrCombine = [...arry1, ...arry2];
console.log(arrCombine);
