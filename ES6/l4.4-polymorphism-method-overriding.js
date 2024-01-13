// l4.4-polymorphism-method-overriding.js
// if superclass method does not fullfill the subclass then subclass define its own method having same singnature, it is called method overriding.

class Person {
  name;
  mobile;
  city;
  constructor(name, mobile, city) {
    this.name = name;
    this.mobile = mobile;
    this.city = city;
  }
  //Overriden
  printProfile() {
    console.log(
      `my Name: ${this.name}, My mobile: ${this.mobile}, city: ${this.city}`
    );
  }
}

class Teacher extends Person {
  employeId;
  salary;
  constructor(id, sal, name, mobile, city) {
    super(name, mobile, city);
    this.employeId = id;
    this.salary = sal;
  }
  //overriding
  printProfile() {
    console.log(
      ` Name: ${this.name},mobile: ${this.mobile}, city: ${this.city} ID: ${this.employeId}, salary: ${this.salary}, `
    );
  }
}

// const obj = new Teacher(101, "4lakh", "Ninad", 7324827982, "Mumbai");
const obj = new Teacher("Ninad", 7878787878, "Pune");

obj.printProfile();
