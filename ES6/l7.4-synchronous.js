/*
l7.4-synchronous.js
- synchronous JS execuates one by one
- use it during functional dependency
- it takes more time to execuate
*/

function task1() {
  console.log("Task 1 completed");
}
function task2() {
  console.log("Task 2 completed");
}
function task3() {
  console.log("Task 3 completed");
}
function task4() {
  console.log("Task 4 completed");
}

console.log("task 1 starts here");
task1();
console.log("task 2 starts here");
task2();
console.log("task 3 starts here");
task3();
console.log("task 4 starts here");
task4();
