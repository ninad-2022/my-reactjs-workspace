//we can write in one go
var str2 = "feuhggr";
let sortStr = str2.split("").reverse().join("");

console.log(sortStr);

//using for loop in function
function stringSorting(str) {
  let sorted = "";
  for (i = str.length - 1; i >= 0; i--) {
    sorted += str[i];
  }
  console.log(sorted);
}

stringSorting("1234567890");
