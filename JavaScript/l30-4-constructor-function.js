//l30-4-constructor-function.js

//construction fucntion (class) only creates when we creates a object with new keyword with same name
//use it when you required same properties to the diff object
//here this refers to current object

function Person(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
}
//it will create a new object
var per1 = new Person("Ninad", 22, "Navi Mumbai");
var per2 = new Person("Abhi", 22, "Koperkhairane");
console.log(per1);
