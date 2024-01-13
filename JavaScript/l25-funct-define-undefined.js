//l25-funct-define-undefined.js
function f1() {
  console.log("f1");
  return {
    name: "f1",
  };
}

//it is undefiend because object name is not on return line. but we can use () to make it defined.
function f2() {
  console.log("f2");
  return;
  {
    name: "f2";
  }
}

function f3() {
  console.log("f3 by using ()");
  3;
  return {
    name: "f3 object",
  };
}
console.log(f1());
console.log(f2());
console.log(f3());
