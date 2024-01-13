//l19-ref-copy-obj.js
//we can copy through reference
var a = { city: "pune" };
var c = { city: "pune" };
var b = a;
a.city = "Mumbai";
console.log(a.city); //mumbai
console.log(b.city); //mumbai
console.log(a == b); //true
console.log(b == c); //false

//modifying the object with reference
var x = { ninad: "boy" };
//assign "x" into "z"
var z = x;
console.log(z);
//modify "x"
x.profession = "Engineer";
console.log(z); //{ ninad: 'boy', profession: 'Engineer' }
