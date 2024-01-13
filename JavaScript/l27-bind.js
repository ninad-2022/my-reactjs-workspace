//l27-bind.js

var obj0 = { name: "Primary school:-", city: "Kamothe-Panvel" };
var obj3 = { name: "Secondary school:-", city: "Navi Mumbai" };
var obj2 = { name: "Diploma:-", city: "Raigad" };
var obj1 = { name: "BE:-", city: "Pune" };

function print(country) {
  console.log(this.name, this.city, country);
}

//bind() - it creates the clone
var print2 = print.bind(obj2);
print2();
print2(); //Diploma:- Raigad undefined (udefined is for argument that we have not given)
print(); //it will give undefined value.
