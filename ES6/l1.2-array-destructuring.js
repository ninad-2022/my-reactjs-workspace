//l1.2-array-destructuring.js

const array = [10, 20, 30, 40, 50];
/*
- use [] for array
- make variable list and assign array into it
- variable inside the list will take elements in the array by index
- use , for spacing the Element in array 
*/
const [a, b, c, , d] = array;
console.log(a, b, c, d);
