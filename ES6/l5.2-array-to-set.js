//l5.2-array-to-set.js
// set is a unique character
const arr = [10, 20, 30, 10, 20, 20, 20, 30, 40, 40, 30, 30];

//array into set
const set = new Set(arr);
console.log(set);

//set into array
const uniqArray = Array.from(set);
console.log(uniqArray);

// one liner from array to set
const abc = [10, 20, 30, 10, 20, 20, 20, 30, 40, 40, 30, 30];
console.log("one liner", Array.from(new Set(abc)));
