//l24-function.js
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//1. for even even value
function even(arr) {
  return arr.filter(function (n) {
    return n % 2 == 0;
  });
}
// var even = even(nums);
// console.log(even);


//2. for odd value
function odd(arr) {
  return arr.filter(function (arr) {
    return arr % 2 != 0;
  });
}
// var odd = odd(nums);
// console.log(odd);


//3. for max value
function max(arr) {
  return Math.max(...arr);
}
// var max = max(nums);
// console.log(max);


//4. for min value
function min(arr) {
  return Math.min(...arr);
}
// var min = min(nums);
// console.log(min);


//5. for sum of array
function sum(arr) {
  return arr.reduce(function (pre, n) {
    return pre + n;
  }, 0);
}
// var sum = sum(nums);
// console.log(sum);



function operation(arr, cmds) {
  var result = arr;
  for (var cmd of cmds) {
    switch (cmd) {
      case "even": {
        result = even(result);
        break;
      }

      case "odd": {
        result = odd(result);
        break;
      }

      case "min": {
        result = min(result);
        break;
      }

      case "max": {
        result = max(result);
        break;
      }

      case "sum": {
        result = sum(result);
        break;
      }
    }
  }
  return result;
}

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var cmd = ["even", "odd"];
var result = operation(nums, cmd);
console.log(result);

