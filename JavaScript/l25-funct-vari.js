//l25-funct-vari.js
//assigning function to variable.
function add(a, b) {
  return a + b;
}
console.log(10, 20);

//here we assign fucntion to a variable so that we can call it through the variable name as well.
var abc = add;
console.log(abc(30, 40));
console.log(add(10, 20));
