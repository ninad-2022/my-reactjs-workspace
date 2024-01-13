//l7.2-Symbol.js
//Symbol gaurantee returns an unique value.
const sm1 = Symbol("id");
const sm2 = Symbol("id");
console.log(sm1 === sm2); //false

//symbol-registry
const id1 = Symbol.for("id"); //create new
const id2 = Symbol.for("id"); //old
console.log(id1 == id2); //true

console.log(Symbol.keyFor(id2)); //it gives id
