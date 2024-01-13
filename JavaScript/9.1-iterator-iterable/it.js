let str = "Dhiraj";
// console.dir(str);
// console.log(str[Symbol.iterator]);

// for (var i of str) {
//   console.log(i);
// }

const ab = {
  name: "dhiraj",
  city: "pune",
  manisha: "sarve",
};

// making the obj iterable by using generator
ab[Symbol.iterator] = function* () {
  yield this.name;
  yield this.city;
  yield this.manisha;
};

// accessgin Symbol.iterator property
let obj = ab[Symbol.iterator]();
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
for (let i of ab) {
  console.log(i);
}
