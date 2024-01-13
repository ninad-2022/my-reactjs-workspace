//l23-array-str-int-sum.js
var arr = [1, 2, "a", "b", 3, "c", 8, "d", "topper"];

var num = 0;
var str = "";

arr.forEach(function (ele) {
  // console.log(typeof ele);
  if (typeof ele == "number") num += ele;
  else str += ele;
});
console.log(num);
console.log(str);
