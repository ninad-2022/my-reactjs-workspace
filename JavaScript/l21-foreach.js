// l21-foreach
//-5 from each value
var nums = [10, 20, 30, 40, 50, 60, 70, 80];
let ab = nums.forEach(function (value, index, array) {
  // console.log(index + "->" + value);
  array[index] = value - 5;
});
console.log(nums);
