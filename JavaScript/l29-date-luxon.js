//l29-date-luxon.js

const { DateTime } = require("luxon");

var dob = DateTime.fromISO("2000-01-11");
// console.log("dob:-", dob);
// var today = DateTime.fromISO("2022-03-12")
var today = DateTime.now();
// console.log("today:-", today);
var age = today.diff(dob, ["years", "month", "days"]).toObject();
console.log(age);
