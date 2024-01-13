// nodemon 5-block-main-thread.js
console.log("first");

setTimeout(() => {
    console.log("1st ST");
}, 10000);

console.log("mid");

setTimeout(() => {
    console.log("2nd ST");
}, 0);

setTimeout(() => {
    console.log("3rd ST");
}, 5);

const startDate = new Date().getTime();
let endDate = startDate;

while (endDate < startDate + 10000) {
    endDate = new Date().getTime();
};

Promise.resolve().then(() => {
    console.log("1st promise");
});

setTimeout(() => {
    console.log("4th ST");
}, 2);

console.log("last");

// output: first - mid - last - 1st promise - 2nd ST - 3rd ST - 1st ST - 4th ST
// 1st ST and 4th ST conlicts with each other 