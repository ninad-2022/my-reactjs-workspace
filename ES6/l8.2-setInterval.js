// l8.2-setInterval.js
let count = 1;

///timerID for getting unqiue ID that known by timer
const timerID = setInterval(() => {
  console.log(count++);
}, 1000);

setTimeout(() => {
  //clearing setInterval() b'cus we want to execaute is once that it done by setTimeout()
  clearInterval(timerID);
}, 10020);

console.log("hello");
