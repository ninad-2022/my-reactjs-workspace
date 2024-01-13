//l18-obj-add-rep.js

var person = {
    name: "abc",
    mobile: 487234843,
    city: "Pune",
};
person.email= "Topperskills@gmail.com"; //add
person.name = "Ninad Developer"; //replace

// person[email]= "Topperskills@gmail.com"; //add
// person[name] = "Ninad Developer"; //replace
delete person.mobile;
console.log(person);