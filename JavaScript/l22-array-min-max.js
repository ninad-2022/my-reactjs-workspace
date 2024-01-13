//l22-array-min-max.js
var nums = [9, 23, 100, 200, 43, 5, 80];

/*
//below we have used spread operator
//console.log("Max num:- ", Math.max([9, 23, 100, 200, 43, 5, 80)); meaning of spread

console.log("Max num:- ", Math.max(...nums));
console.log("Min Num:- ", Math.min(...nums));
*/

/*
// use after sorting
nums.sort(function (a, b) {
  return a - b; //mandatory
});
console.log("max: ", nums[nums.length - 1]);
console.log("min: ", nums[0]);
*/

var min = nums[0],
  max = nums[0];

for (var n of nums)
  if (n < min) min = n;
  else if (n > max) max = n;
console.log("max:- ", max);
console.log("min:- ", min);

//one more remaning
