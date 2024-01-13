// l26-self-invoking-funct.js

var val = (function (a) {
  console.log("hi");
  console.log(a);
  return 100;
})(1);

console.log(val);
