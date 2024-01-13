//l6.4-generator-function.js
/*
Generator function:-
    - it returns the generator Object
    - generator execuated partially
    - a function is called generator when we add * at the end of the function
    - Generator function returns the generator obj which is iterator and iterable.
*/
function* f1() {
  console.log("One");
  yield;
  console.log("Two");
  yield;
  console.log("Three");
  console.log("Four");
}
const genObj = f1();
genObj.next();
genObj.next();
genObj.next();
