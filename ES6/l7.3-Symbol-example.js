//l7.3-Symbol-example.js

const symbolVal = Symbol("id");
const obj = {
  [symbolVal]: 11,
  name: "Ninad",
  city: "Pune",
};

console.log(obj);
console.log(obj[symbolVal]);
obj[symbolVal] = 22;
console.log(obj);
console.log(obj[symbolVal]);
