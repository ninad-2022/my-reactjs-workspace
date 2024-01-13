/*
l5.1-set.js
Set:-
	- Set stores unique values only.
	- Set is iterable
	- You can create empty set or set of existing elements
*/

//creating a set
const emaiList = new Set([
  "aa@gmail.com",
  "bb@gmail.com",
  "cc@gmail.com",
  "xx@gmail.com",
]);

//for adding
emaiList.add("dd@gmail.com");

//for deleting
emaiList.delete("aa@gmail.com");
console.log(emaiList);

// //for checking
console.log(emaiList.has("cc@gmail.com")); //true
console.log(emaiList.has("xx@gmail.com")); //false

// //using if in set
if (emaiList.has("dd@gmail.com")) console.log("dd@gmail.com is here");

// //to iterate elements
for (const ele of emaiList) console.log(ele);

// //for getting set size
console.log(emaiList.size);

// //deleting all the elements
// emaiList.clear();
console.log(emaiList);
