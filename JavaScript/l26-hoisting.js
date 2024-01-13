//l26-hoisting.js
// hoisting:-
//   hositing is a default bheavior of JS in which the varaiable and function decleration moved to the top current scope.

// Note: variable initilization and function initilisation is not hosted
city = "pune"; //variable  initialization
console.log(city); //variable use
var city; //varaiable decleration

add(4, 6);
function add(a, b) {
  console.log(a + b);
}
