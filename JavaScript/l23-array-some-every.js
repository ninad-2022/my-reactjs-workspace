//l23-array-some-every.js
arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// It will return true if condition satisfy for all the elements
var newArr = arr.every(function (val, i, arr) {
  return val >= 5;
});
console.log(newArr);

// It will return true if condition satisfy for some element
newArr = arr.some(function (val, i, arr) {
  return val <= 9;
});
console.log(newArr);
