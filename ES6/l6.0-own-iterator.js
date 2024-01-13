/*
#codeWithHarry
l6.0-own-iterator.js
Creating own iterator object.
*/

//creating a function: function FunctionName(arrayName)
function myIterator(values) {
  let index = 0;
  //returning object
  return {
    //creating next function
    next: function () {
      //returning a object
      if (index < values.length) {
        //returning a object
        return {
          //increasing index value
          value: values[index++],
          done: false,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };
}

const weThePeople = [
  "Indian",
  "American",
  "Russian",
  "Israile",
  "Chinese",
  "German",
];

const ab = myIterator(weThePeople);
console.log(ab.next());
console.log(ab.next());
console.log(ab.next());
console.log(ab.next());
console.log(ab.next());
console.log(ab.next());
console.log(ab.next());
