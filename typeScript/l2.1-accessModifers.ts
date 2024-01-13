/*
l2.1-accessModifers.ts

  The access modifiers are used to control the scope/access of the class members.
  There are three access modifiers 
	- private:- 
	    The private members can only be accessed within the same class.
      
	- protected:-
      The protected members can be accessed from either the same class or from its sub-classes.
	
	- public (default):-
      public members can be accessed from anywhere
*/
class A {
  private id = 11;
  protected name = "n.Developer";
  public city = "Navi Mumbai";
  print() {
    console.log(this.id);
    console.log(this.name);
    console.log(this.city);
  }
}
const aObj = new A();
aObj.print();

class B extends A {
  print() {
    // console.log(this.id); //only accessible in A because of private scope
    console.log(this.name);
    console.log(this.city);
  }
}
const bObj = new B();
bObj.print();

class C {
  print() {
    const a = new A();
    // console.log(a.id); //only accessible in repsective class as it is private
    // console.log(a.name); //only accessible in its class and subclass as it is protected
    console.log(a.city);
  }
}

const cObj = new C();
cObj.print();
