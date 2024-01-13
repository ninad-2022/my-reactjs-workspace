var str = "ABCDE12345abcde";

console.log(str.match(/[0-9]/g).length);
console.log(str.match(/[a-z]/g).length);
console.log(str.match(/[A-Z]/g).length);

// reverse a string
var rev = "abcdefghijklmnop";
// let op = rev.split("").reverse("").join();
let op = rev.split("").join("");

console.log(typeof op);

//infinity
var n = -1000;
while (!Infinity) {
  n = n * 123;
  console.log("n", n);
}
