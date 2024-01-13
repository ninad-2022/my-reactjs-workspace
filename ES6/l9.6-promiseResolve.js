//l9.6-promiseResolve.js
/*
Promise.resolve().then(()=>{
    //perform asny operation
})
*/

console.log("first synce op");
Promise.resolve().then(() => {
  console.log("second sync op");
});
console.log("third synce op");
