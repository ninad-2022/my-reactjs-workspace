//Method-3
console.log("By using higher order function");
const radiusArray = [2, 3, 5, 6];

//creating logic for operations
//these are callback functions
const area = (radius) => Math.PI * radius * radius;
const circumference = (radius) => Math.PI * radius;
const diameter = (radius) => 2 * radius;

//- Creating a  higher order function
//- first argument is for array on which operation is to perform and second is passing our logic function
const calculate = (array, logic) => {
  let output = [];

  for (let i of array) {
    //using our logic on array
    output.push(logic(i));
  }
  return output;
};

console.log(calculate(radiusArray, area));
console.log(calculate(radiusArray, circumference));
console.log(calculate(radiusArray, diameter));

