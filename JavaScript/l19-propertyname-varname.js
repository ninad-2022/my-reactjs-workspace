//if proerty name and var name is same then just add the var name in the curly braces to create the object
var name = "pen";
var mob = "489329265";
var city = "pune";
//Can use above variable in below
var person = {
  name,
  mob,
  city,
  age: 10,
};
console.log(person);
