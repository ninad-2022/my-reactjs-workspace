//l1.3-object-destructuring.js

const person = {
  name: "Ninad",
  mobile: 372473282,
  city: "Pune",
  age: 4,
};

/*
- use {} for object
- use same name as object properties for variable in {}
- For changing variable name use ":", write name as per your desire. ex- age:umar 
*/
const { name, city, age: umar, mobile } = person;
console.log(name, city, umar, mobile);
