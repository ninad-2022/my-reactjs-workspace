// l6.1-iterator-obj.js

const str = "Topper Skills";
// //checking weather str is iterable or not
console.log(str[Symbol.iterator]);

const itr = str[Symbol.iterator]();
console.log(itr);

const obj = itr.next();
console.log(obj);

console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next()); //giving undefined and true

//creating own iterator function for iterable object
function myFor(str) {
  const itr = str[Symbol.iterator]();
  let obj = itr.next();
  while (!obj.done) {
    console.log(obj.value);

    obj = itr.next();
  }
}
myFor(str);
