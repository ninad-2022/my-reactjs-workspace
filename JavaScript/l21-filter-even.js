//print even num in new array
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// /*
//by using map(). it will Give us same size of array with undefined indexes
// (method) Array<number>.map<number>(callbackfn: (value: number, index: number, array: number[]) => number, thisArg?: any): number[]
var evenNum = nums.map(function (ele) {
  if (ele % 2 == 0) return ele;
});
console.log(evenNum);
// */

// /*
// by using filter(). it gives us new array without index constraint
var evenNum = nums.filter(eveNum);
function eveNum(ele) {
  if (ele % 2 == 0) return ele;
}
console.log(evenNum);
// */
