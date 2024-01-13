//l22-obj-iterablee.js
var obj = {
  a: "abbb",
  b: "bbb",
  c: "ccc",
};
obj[Symbol.iterator] = function* () {
  yield this.a;
  yield this.b;
  yield this.c;
};

for (var i in obj) console.log(i);
for (var i of obj) console.log(i);

let obj2 = {
  1: 100,
  2: 200,
  3: 300,
  4: 400,
};
