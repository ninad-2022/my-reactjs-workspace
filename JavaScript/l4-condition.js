// l4-condition.js
//single block statement i.e. if
//truthy values
if (true) {
  console.log("This is true value, so truthy");
}

if (10) {
  console.log("This is integer value, so truthy");
}

if ("string value") {
  console.log("This is string value, so truthy");
}

if ({}) {
  console.log("This is object, so truthy");
}

if ([]) {
  console.log("This is true array, so truthy");
}

//falsy values

if (false) {
  console.log("This is false value, so falsy");
}

if (0) {
  console.log("This is zero value, so falsy");
}

if (undefined) {
  console.log("This is undefined value, so falsy");
}

if ("") {
  console.log("This is empty string value, so falsy");
}

if (null) {
  console.log("This is null value, so falsy");
}

//double block if else statement

var num = 11;
//positive or negative
if (num < 0) {
  console.log("Negative number");
} else {
  console.log("Positive number");
}

//odd or even number
if (num % 2 == 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

//nested else if statement
//the code written below is nested else if which follows rule
//Note:
var a = 10,
  b = 20,
  c = 30;

if (a > b && a > c) console.log("a is greater");
else if (b > a && b > c) console.log("b is greater");
else console.log("c is greater");
