//l19-modify-properties.js
//making a readable object only
var obj = {
  city: "pune",
  age: 5,
};

//for freeze everthing
// Object.freeze(obj);

//for modifying only
// Object.seal(obj);

//precent extend (no add but delete and modification can be done)
// Object.preventExtensions(obj);
obj.email = "asgdgd@gmail.com";
delete obj.age;
obj.city = "mumbai";

console.log(Object.isExtensible(obj));
console.log(Object.isSealed(obj));
console.log(Object.isFrozen(obj));
