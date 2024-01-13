//object prop values accessing
var prop = "isActive";
var person = {
  firstName: "Ninad Bhoir",
  age: 22,
  [prop]: true,
  isActive: true,
  mobile: 43964926539,
  address: { street: "Navi mumbai", city: "Koperkhairane" },
  adharNo: undefined,
  gst: null,
  printProfile: function () {
    console.log("Name: " + this.firstName);
  },
};

console.log(person.firstName);
console.log(person["last name"]);
console.log(person[prop]);
console.log(person.address);
console.log(person.printProfile());
