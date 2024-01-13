//l1-incre-decre.js

//increament
var a = 10; //10, 11, 12
var b = a++; //10
var c = ++a; //12
console.log("a, b, c:-", a, b, c);

var d = 10;
console.log("d:-", ++d, d++, d++, ++d); //11, 11 (12), 12 (13),14

//decreament
var e = 10;
console.log("e:-", --e, ++e, e--, ++e, e--); //9, 10, 10 (9),10, 10 (9)
console.log("e:-", e);
