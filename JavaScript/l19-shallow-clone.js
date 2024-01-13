// l19-shallow-clone.js
//it changes the value of refer object.
// var name = {...objName} this is ES6 method.
// - outer properties are created in differenet location in memory block whereas inner objects are reffering the same location, is  called shallow cloning

var person = {
  name: "orginal",
  mob: 384444784,
  address: {
    city: "Pune",
    country: "India",
  },
};

var person2 = Object.assign({}, person);
// var person2 = { ...person };

person.name = "changed name";
person.address.city = "changed city";
// person.address.city = "mumbai";

console.log("orignal object", person);
console.log("cloned object", person2);
