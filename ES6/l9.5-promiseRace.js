// l9.5-promiseRace.js
/*
  Promise.race()
    - this method accepts multiple promises and returns a resolved promise if the first settled promise is resolved.
    -If the first settled promise gets rejected then it returns rejected promise
*/
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 data");
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2 data");
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p3 data");
  }, 3000);
});

const result = Promise.race([p1, p2, p3])
  .then((data) => {
    console.log("data", data);
  })
  .catch((err) => {
    console.log("err", err);
  });
