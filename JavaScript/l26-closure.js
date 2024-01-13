//l26-closure.js

counter = 399;

function getCounter() {
  var counter = 0;
  function increment() {
    return counter++;
  }
  return increment;
}

// var inc = getCounter();
// console.log(inc());
// console.log(inc());
// console.log(inc());
// console.log(inc());

var totalBikes = getCounter();
var totalCars = getCounter();

console.log("totalBikes", totalBikes());
console.log("totalBikes", totalBikes());
console.log("totalCars", totalCars());
console.log("totalCars", totalCars());
console.log("totalBikes", totalBikes());
console.log("totalBikes", totalBikes());
console.log("totalBikes", totalBikes());
console.log("totalBikes", totalBikes());
console.log("totalCars", totalCars());
console.log("totalCars", totalCars());
console.log("totalCars", totalCars());
console.log("totalCars", totalCars());
console.log("totalCars", totalCars());
console.log("totalBikes", totalBikes());
console.log("totalBikes", totalBikes());
console.log("totalBikes", totalBikes());
console.log("totalCars", totalCars());
console.log("totalBikes", totalBikes());
