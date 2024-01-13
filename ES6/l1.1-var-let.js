//it has global scope.
var a = 10;
var b = 20;

if (true) {
  //this will create variable conflict and replace above "a"
  var a = 100;

  //"b" also has global but block scope.
  //"b" will stay in function only.
  let b = 200;
  console.log(a); //100
  console.log(b); //200
}

console.log(a); //100
console.log(b); //20
