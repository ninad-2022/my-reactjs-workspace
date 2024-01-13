//l8.5-higher-order-fn.js
/*
A function which takes another function as an argument or returns a function is called higher order function
Example for concept only, code error is there
// x() is a callback here
function x() {
  console.log("Namaste");
}

// y() is a higher order function
function y(x) {
  x();
}

// */

// make a function to calculate area, circumference and dia of the each element of the mapArray
// Method-1. by using map() method
console.log("By using map method");

let mapArray = [2, 3, 5, 6];
let mapArea = mapArray.map((radius) => {
  return Math.PI * radius * radius;
});
console.log("mapArea:-", mapArea);

let mapCircumference = mapArray.map((radius) => {
  return 2 * Math.PI * radius * radius;
});
console.log("mapCircumference:-", mapCircumference);

let mapDiameter = mapArray.map((radius) => {
  return 2 * Math.PI * radius;
});
console.log("mapDiameter:-", mapDiameter);

//Method-2 by using functional programming
console.log("By using normal functional programming");

let funcArray = [2, 3, 5, 6];

const calculateArea = (arrayArgument) => {
  let output = [];
  for (let i = 0; i < arrayArgument.length; i++) {
    output.push(2 * Math.PI * arrayArgument[i]);
  }
  return output;
};
console.log(calculateArea(funcArray));
//console.log(calculateArea("arrayFunction area:-", funcArray)); //why giving error

const calculateCircumference = (arrayArgument) => {
  let output = [];
  for (let i = 0; i < arrayArgument.length; i++) {
    output.push(2 * Math.PI * arrayArgument[i] * arrayArgument[i]);
  }
  return output;
};
console.log(calculateCircumference(funcArray));

const calculateDia = (arrayArgument) => {
  let output = [];
  for (let i = 0; i < arrayArgument.length; i++) {
    output.push(2 * Math.PI * arrayArgument[i]);
  }
  return output;
};
console.log(calculateDia(funcArray));
/*
- we are repeating ourself a lot
- code is same but logic is diffent only
- we can make it in modular way
*/

//Method-3
console.log("By using higher order function");
const radiusArray = [2, 3, 5, 6];

//creating logic for operations
//these are callback functions
const area = (radius) => {
  return Math.PI * radius * radius;
};
const circumference = (radius) => {
  return 2 * Math.PI * radius;
};

const diameter = (radius) => {
  return 2 * Math.PI * radius;
};

//- Creating a  higher order function
//- first argument is for array on which operation is to perform and second is passing our logic function
const calculate = (array, logic) => {
  //taking empty array
  let output = [];
  //iterating each element in the array
  for (let i = 0; i < array.length; i++) {
    //using our logic on array
    output.push(logic(array[i]));
  }
  //returning array
  return output;
};

console.log(calculate(radiusArray, area));
console.log(calculate(radiusArray, circumference));
console.log(calculate(radiusArray, diameter));

//now we are making our own map function
const ownMapArray = [1, 2, 3, 4, 5, 6];
//prototype won't allow arrow function, it needed anonymous function
Array.prototype.ownMap = function (logic) {
  //taking empty array
  let output = [];
  //iterating each element in the array
  for (let i = 0; i < this.length; i++) {
    //using our logic on array
    output.push(logic(this[i]));
  }
  //returning array
  return output;
};
console.log(ownMapArray.ownMap(area));
