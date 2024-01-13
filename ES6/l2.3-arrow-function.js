// l2.3-arrow-function.js

//normal function
const sq1 = function (a) {
  return a * a;
};

//arrow function
const sq2 = (b) => {
  return b * b;
};

console.log(sq2(10));

//Rule of arrow funtion - if single arguement
const singleAdd = (c) => c + c;
console.log(singleAdd(2));
