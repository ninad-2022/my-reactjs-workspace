//to get double value array
var nums = [10, 20, 30, 40, 50, 60, 70, 80, 90];
console.log(nums);
function interate(val, ind, arr) {
  return val + 10 / 2;
}
var newArray = nums.map(interate);
console.log(newArray);
