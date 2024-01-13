/**
nodemon 3-comparison-operators.js
NOTE: 
false means 0 
true means 1
w3 school: https://www.w3schools.com/js/js_type_conversion.asp 
que: https://www.programiz.com/javascript/type-conversion
*/

console.log(3 > 2 > 1)
//(3 > 2) > 1 => true > 1 => ans: false

console.log(1 < 2 < 3);
//(1 < 2) < 3 => true < 3 => ans: true 

console.log("2" + 1); 
//21 => concatination happen

console.log(+"2" + 1);
//+"2" => is converting it into number then addition


console.log("2" - 1);
// -1 makes it number, hence subtraction

console.log(1 + -"1" + "2");
// 1+ "-1" => 0, 0+"2" => 02
