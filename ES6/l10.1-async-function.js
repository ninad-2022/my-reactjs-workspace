// -generator function are alternative to async await
// function* getServerData() {
//   console.log("Start fetching");
//   yield;
//   setTimeout(() => {
//     console.log("data received");
//   }, 3000);
//   yield;
//   console.log("printing data");
// }
// const gen = getServerData();
// console.log("One"); //One
// gen.next(); //Start fetching
// console.log("Two"); //Two
// gen.next();
// console.log("Three"); //Three
// gen.next(); //Three
// console.log("four"); //four
// // data received

//
async function fethServerData() {
  console.log("Start fetching...");

  const p = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("server data received");
    }, 3000);
  });
  console.log("Printing data...");
  return p;
}

console.log("start"); //start
const p = fethServerData(); //Start fetching...
console.log(p); //Promise { <pending> }
p.then((data) => {
  console.log(data);
});
console.log("End"); //End

// Printing data...
//server data received
