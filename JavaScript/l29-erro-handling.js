//l29-erro-handling.js

console.log("first");
try {
  console.log(abc);
} catch (err) {
  console.log(err.message);
}
console.log("last");
