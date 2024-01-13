//l29-use-strict.js
"use strict";
function add(a, a) {
  return a + a;
}
console.log(add(10, 20)); //40 because 1st parameter is replace by 2nd then return statement is execuated. becuase same named variable cannot take a place in a scope.
