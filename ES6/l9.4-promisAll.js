// l9.4-promisAll.js
//it will return resolve promise when all are resolve

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 data");
    console.log("p1 data");
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout((data) => {
    resolve("p2 data");
    console.log("p2 data");
  }, 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p3 data");
    console.log("p3 data");
  }, 3000);
});

const result = Promise.all([p1, p2, p3])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("err", err);
  });

// console.log(result);
