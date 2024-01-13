//string
var str = "Ninad Bhoir";

//for checking Symbol.iterator property
console.dir(str);

// for accessign Symbol.iterator property
let itr = str[Symbol.iterator]();
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());

// looping string
for (var i of str) {
  console.log(i);
}

//object
let obj = {
  name: "Ninad",
  city: "Pune",
  mob: 892314,
};

// let itrObj = obj[Symbol.iterator]();
// console.log(itrObj.next());

// making an obj iterable by using symbol.iterator property
const ab = (obj[Symbol.iterator] = function* () {
  yield this.name;
  yield this.city;
  yield this.mob;
});

console.log(ab());
// for (var j of obj) {
//   console.log(j);
// }
