//l22-array-findindex.js

// l22-array-findindex
var arr = [10, 20, 30, 40, 50, 60];

//if finds index with condition
var num = arr.find(function (value, index, arr) {
  return value < 50 && value > 10;
});
console.log("index value :- ", num);

var arrIndex = arr.findIndex(function (value, index, arr) {
  return value == 30;
});
console.log("index number :- ", arrIndex);
