// l8.1-setTimeout.js
//Timer API :-
// setTimeout(callback, delay)

function greet() {
  console.log("Hi");
}

// greet();

// console.log("first");
// setTimeout(greet, 4000);
// console.log("last");

// setTimeout() returns a timer id which is used to identify the timer

function add(a, b) {
  console.log(a + b);
}

add(10, 20);

const timerID = setTimeout(add, 5000, 30, 30);
clearTimeout(timerID);
