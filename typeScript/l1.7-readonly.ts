/*
l1.7-readonly.ts
readonly property:
	- the value of read-only property cannot be changed once the object is created
  - If you want to initialize the read-only property then it can be done only within the constructor
  - it only works for property, not for object
*/
class Employee {
  readonly id: number;
  name: string;
  city: string;
  constructor(id: number, name: string, city: string) {
    this.id = id;
    this.name = name;
    this.city = city;
  }
}

const emp = new Employee(10, "Ninad", "Mumbai");
console.log(emp);
// emp.id = -1;//you cant change once you make readonly
