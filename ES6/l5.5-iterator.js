// l5.5-iterator.js
//iterable object is an object having Symbol.iterator property.

const person = {
  name: "N.Developer",
  city: "Pune",
};

//making user defined iterable object
person[Symbol.iterator] = function* () {
  yield this.name;
  yield this.city;
};

for (const prop of person) {
  console.log(prop);
}
