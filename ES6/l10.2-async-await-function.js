//l10.2-async-await-function.js

function task1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("task-1");
    }, 1000);
  });
}

function task2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("task-2");
    }, 2000);
  });
}

function task3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("task-3");
    }, 800);
  });
}

async function operations() {
  const resolveVal1 = await task1();
  console.log("one", resolveVal1);
  const resolveVal2 = await task2();
  console.log("two", resolveVal2);
  const resolveVal3 = await task3();
  console.log("three", resolveVal3);
}
console.log("start");
operations();
console.log("end");

/*
execuation:-
    start
    end
    one task-1
    two task-2
    three task-3 
*/
