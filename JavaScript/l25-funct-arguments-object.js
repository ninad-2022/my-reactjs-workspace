// l25-funct-arguments-object.js

function f1(a, b, c) {
  console.log("arguments:- ", arguments);
  console.log("argument length:- ", arguments.length);
  console.log("callee:- ", arguments.callee.name);
  console.log("caller:- ", arguments.callee.caller.name);
}

function f2() {
  f1(10, 20, 30, 40); //callee
}

f2(); //caller
console.log("Parameters of f1:- ", f1.length);
