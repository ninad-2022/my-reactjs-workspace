//l4.5-static-keyword.js
/*
static keyword:-
The static keyword is used to declare class level members.

static properties:-
    - If a property is static then it will not be the part of object.
    - static property of a class is used to store a value which is common for all the objects.
    - static members are accessed using class name.
    - the static methods are created at the time of class loading.
    - The static members does not require creating object.
    - static properties gets one time memory initialization 
    - use static keyword for static method which are not bind with object.
*/

class Employee {
  empID;
  salary;
  name;
  city;
  static company = "Tata"; //it will remain same throughout the programme
  constructor(Id, sal, name, city) {
    this.empID = Id;
    this.salary = sal;
    this.name = name;
    this.city = city;
  }
}

const emp1 = new Employee(101, 250000, "Ninad", "Mumbai");
const emp2 = new Employee(102, 250000, "Ram", "Pune");
console.log(emp1, emp2);
console.log("Company: ", Employee.company);
