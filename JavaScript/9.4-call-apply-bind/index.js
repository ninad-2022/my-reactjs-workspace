/*
Call()
 - concept is known as function borrowing
 - for using method over other object

 call(reference poinitng)

 appy()
 - the only difference is of passing argument as it takes arguments in the array i.e []

 bind()
 - it gives you the copy of the method and bind it with the object which can be revoke later
 */

let name = {
  firstName: "Ninad",
  lastName: "Bhoir",
};

let name2 = {
  firstName: "Akash",
  lastName: "Puri",
};

// you cant use arrow cus it does not have this keyword binding
const printFullName = function (city) {
  console.log(this.firstName + " " + this.lastName + " " + city);
};

// second argument will goes into the params of function
printFullName.call(name2, "Navi mumbai by call()");
printFullName.apply(name2, ["Pune by appy()"]);

const printBindFullName = printFullName.bind(name, "Mumbai by bind()");
printBindFullName();

console.log(name);
console.log(name2);
