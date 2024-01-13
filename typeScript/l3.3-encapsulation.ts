/*l3.3-encapsulation.ts
Encapsulation:-
  - Encapsulation is a process of securing data by hiding it using private access modifier.
  - it is use for data security.
  - when you transfer a object from one method to another, chances are high to intermingle the values.
  - Example:
    suppose object is transfering in the following way and we have to modify it, we could a assign a wrong value to it:
    view -> controller -> model -> database
  - use below command for execuating accessors as it supported only in ES5 and higher:-
          tsc fileName.ts --target es5
          tsc l3.3-encapsulation.ts --target es5
*/
class Person2 {
  constructor(
    private id: number,
    private _name: string,
    private city: string
  ) {}

  //setter
  setId(id) {
    if (id > 0) this.id = id;
  }
  //getter
  getId() {
    return this.id;
  }
  // by using setId() and getId(), cannot access  it like a property you have to access it like method that lead to use below setter and getters. we get it in ES6

  //setter
  // if we use "this.name"  then it will become function recursion, it will call it itself repeatedly so we are taking "_name" here for assign value into different property. it will not repeat as it maintains different property internally.
  set name(n: string) {
    if (n.length >= 3) this._name = n;
  }
  //getter
  get name(): string {
    return this._name;
  }
}

const personObj = new Person2(11, "n.Developer", "Navi-mumbai");

personObj.setId(12);
personObj.name = "Ninad";
console.log(personObj.getId());
console.log(personObj.name);
