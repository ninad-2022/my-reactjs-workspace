// l21-reduce-filter.js
//reduce takes previous number and next number
//to perform addition

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/*
var sum = 0;
for (var n of nums) sum += n;
console.log(sum);
*/
let substract = nums.reduce((prev, ele) => {
  return prev - ele;
});

console.log(substract);

var sum = nums.reduce(function (pre, ele) {
  return pre + ele;
}, 0);
console.log(sum);

var multi = nums.reduce(function (pre, post) {
  return pre * post;
});
console.log(multi);
