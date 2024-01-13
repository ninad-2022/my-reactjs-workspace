//l22-arry-sorting.js
var nums = [9, 23, 100, 43, 5, 80];
// nums.sort(); //sort by character code
// console.log(nums);

nums.sort(sortAsc);
// console.log(nums);

//for ascending
function sortAsc(a, b) {
  return a - b;
}

//for descending
function sortDsc(a, b) {
  return b - a;
}

const sortArr = (a, b) => {
  return a - b;
};
