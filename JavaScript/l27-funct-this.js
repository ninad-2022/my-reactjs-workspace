//l27-funct-this.js
// function f1() {
//   console.log("this:- ", this);
// }
// f1();
// var obj = {
//   name: "abcd",
//   print: f1,
// };
// obj.print();

//This - it calls current object
//call() - to create a new context
var obj0 = { name: "Primary school:-", city: "Panvel" };
var obj1 = { name: "BE:-", city: "Pune" };
var obj2 = { name: "Diploma:-", city: "Raigad" };
var obj3 = { name: "School:-", city: "Navi Mumbai" };

//for no parameter
function print() {
  console.log(this.name, this.city);
}

// for parameter
function printPara(arg) {
  console.log(this.name, this.city, arg);
}
// print.call(obj0);
// print.call(obj1);
// print.call(obj2);
// print.call(obj3);

//calling parameter
// printPara.call(obj3, "calling on obj paramter, India");
//apply  method same but we use array in it
// printPara.apply(obj3, ["here we are using apply array"]);

//when we want to use another object's method in different obj
var obj5 = {
  name: "Ninad",
  mobile: "43873875985387",
  print() {
    console.log(this.name, this.mobile);
  },
};

obj5.print();
var obj6 = { name: "sdlfkls", mobile: "2342344" };
obj5.print.call(obj6);
