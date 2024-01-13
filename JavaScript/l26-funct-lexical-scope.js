//l26-funct-lexical-scope.js

function add(a, b) {
  //lexical scope
  //lexical scope maintains copy of the local variable of outer function to be accessed inside the nested function.
  function f2(c) {
    console.log(a, b, c);
  }
  return f2;
}

var f2 = add(10, 20); //a=10, b=20
f2(30); //c=30
