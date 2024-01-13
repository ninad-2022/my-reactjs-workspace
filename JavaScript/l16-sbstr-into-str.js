//l16-sbstr-into-str.js
//Inserting a substring in the string
var str = "NINAD BHOIR NINAD BHOIR NINAD BHOIR NINAD BHOIR";
var sstr = "abv";
var position = 4;
var op = str.substring(0, position) + sstr + str.substring(position);
console.log(op);
