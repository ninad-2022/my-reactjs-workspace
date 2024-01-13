// l27-curry-curied.js
// by using closure
function add(a) {
  return function (b) {
    return a + b;
  };
}

var sum = add(10, 20);
console.log(sum);

// by using bind
const multiply = function (a, b) {
  console.log(a * b);
};

const mult = multiply.bind(this, 4);
mult(4);
