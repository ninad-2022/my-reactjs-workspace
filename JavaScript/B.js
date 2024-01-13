var person = {
  name: "orginal",
  mob: 384444784,
  address: {
    city: "Pune",
    country: "India",
  },
};

// the below two methods are creating shallow copy hence, nested objects are refering as they are pass by reference whereas outer objects do not refer

// var person2 = Object.assign({}, person);
var person2 = { ...person };

person.name = "changed name";
person.address.city = "changed city";
// person.address.city = "mumbai";

console.log(person);
console.log(person2);
