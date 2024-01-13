//l24-array-set-unique.js

var old = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

var set = new Set(old);

var arr = Array.from(set);
console.log(arr);

//shorthand
console.log(Array.from(new Set(old)));

var ccc = Array.of(99, 88, 77, 66, 55, 44, 33, 22, 11);
console.log(ccc);
