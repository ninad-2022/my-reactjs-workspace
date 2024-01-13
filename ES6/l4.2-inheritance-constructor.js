// l4.2-inheritance-constructor.js
class Parent {
  name;
  contact;
  constructor(name, contact) {
    console.log("parent constructor");
    this.name = name;
    this.contact = contact;
  }
}

class Child extends Parent {
  //it automatically calls parent construcctor even if we didnt assign here.
  constructor(name, contact) {
    //it will call parent then parent execuates and then child
    super(name, contact);
    console.log("Child construcor");
  }
}

//here we are invoking Child (always use new for it)
const obj = new Child("Ninad", "7506764530");
console.log(obj);
