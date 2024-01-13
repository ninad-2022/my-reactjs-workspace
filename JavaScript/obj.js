// let obj = [
//   {
//     name: "ninad",
//     salary: 30000,
//   },
//   {
//     name: "rahul",
//     salary: 40000,
//   },
//   {
//     name: "shweta",
//     salary: 50000,
//   },
// ];

// let mapMethod = obj.map((val) => val.name);
// console.log(mapMethod);

// obj.filter((val, i) => console.log(val.salary > 35000));

// // let reduceval = obj.reduce((prev, next) => {
// //   console.log(next.salary);
// //   console.log(prev.salary);
// //   prev.salary + next.salary, 0;
// // });
// // console.log(reduceval);
// // console.log("a" - "a");

// const fruits = [
//   { name: "Apple" },
//   { name: "JackFruit" },
//   { name: "Orange" },
//   { name: "Guava" },
//   { name: "Avocado" },
// ];

// const ab = fruits.filter((val, i) => {
//   if (val.name.length > 6) {
//     return val;
//   }
// });
// console.log(ab);

// const obj1 = { name: "abc" };
// const obj2 = { name: "abc" };
// console.log(obj1 === obj2);
// console.log(obj1 == obj2);

// const obj1 = { name: "abc" };
// const obj2 = { name: "abc" };
// const obj3 = { name: "def" };
// const obj4 = { name: abc, age: 23 };

// Are objects are different, write a function diff(obj,obj) which return true or false? //OutPUt console.log(diff(obj1, obj2)); //false console.log(diff(obj1, obj3)); //true console.log(diff(obj1, obj4)); //true

// function diff(obj1, obj2) {
//   if (obj1 === obj2) return true;
//   else false;
// }

// console.log(diff(obj1, obj3));

// Find the name which has more than 6 char and return in a array. const fruits = [{name: 'Apple'}, {name: 'JackFruit'}, {name: 'Orange'}, {name: 'Guava'}, {name: 'Avocado'}];

// what is the output of the code. why yes/no const obj1 = {name: 'abc'}; const obj2 = {name: 'abc'}; console.log(obj1 === obj2); console.log(obj1 == obj2);

// Given an array of integers, keep a total score based on the following: Add 1 point for every even number in the array Add 3 points for every odd number in the array, except for the number "5" Add 5 points every time the number "5" appears in the array Note that 0 is considered even. Examples Input: [1,2,3,4,5] Output: 13 Input:[17,19,21] Output: 9 Input: [5,5,5] Output: 15

// Compare the following objects const obj1 = { name: 'abc' }; const obj2 = { name: 'abc' }; const obj3 = { name: 'def' }; const obj4 = { name: abc , age : 23 } //Are objects are different, write a function diff(obj,obj) which return true or false? //OutPUt console.log(diff(obj1, obj2)); //false console.log(diff(obj1, obj3)); //true console.log(diff(obj1, obj4)); //true

// Create a function which adds N number. numbers will passed as an arguments. add(2,3,4) // 9 add(2,3,4,1) // 10 add(2) // 2

let a = 0; //1 //1
let b = 1; //1 //
let abc; //1

for (let i = 0; i < 10; i++) {
  console.log(a); //1
  abc = a + b; //1, 2
  a = b;
  b = abc;
}

// 0, 1,
