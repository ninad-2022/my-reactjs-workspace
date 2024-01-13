// //duplicateArray.js

// // indexOf() - it returns -1 if elements is not in the array
let a = [1, 2, 2, 3, 4, 5, 6, 7, 8, 8, 9, 0];

const newArr = [];
for (i of a) {
  if (newArr.indexOf(i) === -1) {
    newArr.push(i);
  }
}
console.log(newArr);
