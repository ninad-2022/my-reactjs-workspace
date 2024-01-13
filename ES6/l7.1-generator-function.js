//l7.1-generator-function.js

function* add(num) {
  yield num + 1;
  yield num + 2;
  yield num + 3;
}

function* f1(i) {
  yield i + 5;
  //calling another generator function by "*"
  yield* add(i); //execuating add() function first then below
  yield i + 10;
}

const genObj = f1(10);
console.log(genObj.next().value); //15
console.log(genObj.next().value); //11
console.log(genObj.next().value); //12
console.log(genObj.next().value); //13
console.log(genObj.next().value); //20
console.log(genObj.next().value); //undefined
