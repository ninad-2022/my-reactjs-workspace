//now we are making our own map function
const ownMapArray = [1, 2, 3, 4, 5, 6];
//prototype won't allow arrow function, it needed anonymous function

const area = (radius) => Math.PI * radius * radius;

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
