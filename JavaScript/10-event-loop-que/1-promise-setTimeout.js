// nodemon 1-promise-setTimeout.js

setTimeout(() => {
  console.log(2);
}, 0);

console.log(1);

Promise.resolve(() => {
  console.log(3);
});

console.log(5);

setTimeout(() => {
  console.log(4);
}, 0);


