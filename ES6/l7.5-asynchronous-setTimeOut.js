//l7.5-asynchronous-setTimeOut.js

function task1() {
  setTimeout(() => {
    console.log("Task-1");
  }, 100);
}
const a = (a, b, c) => {
  return a + b + c;
};
function task2() {
  setTimeout(() => {
    console.log("Task-2");
  }, 1000);
}
function task3() {
  setTimeout(() => {
    console.log("Task-3");
  }, 100);
}
function task4() {
  setTimeout(() => {
    console.log("Task-4");
  }, 1000);
}

console.log("Task-1 starts here");
task1();
console.log("Task-2 starts here");
task2();
console.log("Task-3 starts here");
task3();
console.log("Task-4 starts here");
task4();



