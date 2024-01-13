// l9.7-async-function.js

console.log("start");
async function add(a, b) {
  // throw new Error("addition is not possible");
  return a + b;
}

// resolve(30)
add(10, 20)
  .then((sum) => {
    console.log("Sum: ", sum);
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
console.log("End");
