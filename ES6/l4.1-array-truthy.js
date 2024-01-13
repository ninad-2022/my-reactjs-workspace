// l4.1-array-truthy.js
//filter the array, return only truthy value.
const arr = [100, "", "India", null, undefined];

// with filter
const truthyArr = arr.filter((val) => val);
console.log(truthyArr);

// without built in method
const truthyArr2 = [];
for (let i = 0; i < arr.length; i++) {
  if (Boolean(arr[i])) truthyArr2.push(arr[i]);
}

console.log(truthyArr2);
