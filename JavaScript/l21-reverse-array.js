// l21-reverse-array.js
var arr = ["a", "b", "c", "d", "A", "B", "C", "D"];

/*
console.log(arr);
arr.reverse();
console.log(arr);
*/
// by using loop and push
function revArr(arr) {
  let newArr = [];
  for (i = arr.length - 1; i > 0; i--) {
    // newArr += arr[i]; //it returns string
    newArr.push(arr[i]); //it returns array
  }
  return newArr;
}
console.log(revArr(["a", "b", "c", "d"]));

// with push and pop
function reverseArray(array) {
  let outputArray = [];
  while (array.length) {
    outputArray.push(array.pop());
  }
  return outputArray;
}
console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// for (var i = 0, j = arr.length - 1; i < j; i++, j--) {
//   var temp = arr[i]; //a
//   arr[i] = arr[j]; //D
//   arr[j] = temp; //a
// }
// console.log(arr);
