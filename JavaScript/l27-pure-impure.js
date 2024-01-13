//l27-pure-impure.js

//pure function is a function which values does not changes
function add(a, b) {
  return a + b;
}

function addition(a, b) {
  b = b - new Date().getDate();
  return a + b;
}

console.log(addition(10, 20));
