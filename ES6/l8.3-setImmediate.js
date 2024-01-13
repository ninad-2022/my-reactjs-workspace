//l8.3-setImmediate.js

console.log("before setImmediate()");
//it execuates asynchronously
setImmediate(() => {
  console.log("Inside the setImmediate()");
});
console.log("after setImmediate()");
