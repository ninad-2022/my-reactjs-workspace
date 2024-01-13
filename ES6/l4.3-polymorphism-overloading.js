/*
l4.3-polymorphism-overloading.js
Polymorphism
    In Polymorphism, muliple methods having same name but different forms are used.
    The polymorphism can achieved using
    1. method overloading
    2. method overriding

Method overloading-
- The method overloading is not supported in javascript because in method overloading multiple methods having same name will differentiated based on their paremeters but in javascript parameters matching is optional while calling a method
- If you define multiple methods having same name but different parameters within a same class then it is called method overloading

Example
*/

class Addition {
  add(a, b) {
    return a + b;
  }
  add(a, b, c) {
    return a + b + c;
  }

  add(a, b, c, d) {
    return a + b + c + d;
  }
}
//in JS it is not necessary to match the parameter and arguments so, method overloading is not supported in JS.
const obj = new Addition();
console.log(obj.add(10, 10));
