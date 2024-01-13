// l1.1-Compile.ts

//use datatype in typeScript
const name2: string = "n.Developer";
console.log(name2);

let a: number,
  b: number = 30;
a = 10;
// const a: number = { na: "abc", an: "hdhd" }; //gives error bcus a has been declared
console.log(a + b);

//making an array
let nums: number[];
//you have to add only one datatype
nums = [10, 20, 30, 40];

console.log(nums);

//use any for adding any data types
let mixTypes: any[];
mixTypes = [10, 20, "string", true];
console.log(mixTypes);
