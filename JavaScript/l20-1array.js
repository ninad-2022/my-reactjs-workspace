// create  a array to store 1 to 10 values

// var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(nums);
/*
//add and replace of array value
nums[nums.length]= 20;
nums[nums.length+3]=11;
nums[3]="3rd";
console.log(nums);
console.log(nums[2]); //show element
*/

// /*
//adding value in end without returning array size
// nums.push(12, 23, 4, 556, 778, 8);

//adding value in start without returning array size
// nums.unshift("begining is always hardest", 2737223, 499999, 999999);

//it adds in end as well as returns array size
// console.log(nums.push(11, 22, 33));

//it adds in start as well as returns array size
// console.log(nums.unshift(00, 99, 88));
// */

// /*
// nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// returns and removes first value
// console.log(nums.shift());

// returns and removes last value
// console.log(nums.pop());

// */

/*
//nums = [1,2,3,4,5,6,7,8,9,10];

// it will delte all after index
// nums.splice(3);

//it will delte element after index upto count
// nums.splice(3,2);

*/
// nums.splice(remove index, deleteCount add, add)
// nums.splice(2, 2, 0, 12);
// console.log(nums);

var india = ["Maharashtra", "gujrat", "delhi", "lahore", "punjab", "hariyana"];
india.splice(3, 1, "Kerla", "goa");
console.log(india);

let arr = [10, 20, 30, 40, 50];

console.log(arr.push(10)); //add to last and returns the length
console.log(arr.pop(10)); //removes to last and returns it
console.log(arr.unshift(12)); //add to start and returns the length
console.log(arr.shift()); //remvoes start element and returns it
