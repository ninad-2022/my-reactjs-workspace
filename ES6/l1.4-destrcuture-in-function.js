// l1.4-destrcuture-in-function.js
//this is traditional method
/*
function printProfile(user) {
  console.log(
    "name " + user.name + "mobile " + user.mobile + "city " + user.city
  );
}
*/

//this is ES6 method
function printProfile({ name, mobile: mymob, city }) {
  console.log("name " + name + "mobile " + mymob + " city " + city);
}

const person = {
  name: "N.developer",
  mobile: "03484387327873",
  city: "Mumbai-Raigad-Pune",
};

printProfile(person);

//example -2
function myFullname({ first, second, last }) {
  console.log(
    `my full name is ${first}, my second name is ${second}, my last name is ${last}`
  );
}

const Ninad = {
  first: "Ninad",
  second: "santosh",
  last: "Bhoir",
};

myFullname(Ninad);
