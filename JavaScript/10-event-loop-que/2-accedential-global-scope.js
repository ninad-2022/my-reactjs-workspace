// nodemon 2-accedential-global-scope.js

function foo () {
    var a = b = 0;
    a++
    return a;
}
foo();

console.log("typeOf-b", typeof b); //number
console.log("typeOf-a", a); //not-defined
// Reason: b defined globally due to accential global scope.  