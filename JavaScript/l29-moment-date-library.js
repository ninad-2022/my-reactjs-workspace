// l29-moment-date-library.js

const moment = require("moment");

console.log(moment().format());
console.log(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
console.log(moment().format("dddd, MMM Do YYYY, h:mm:ss a"));
console.log(moment().format("ddd, hA"));
console.log(moment().format("[today is] dddd"));

var a = moment([2022, 8, 18]);
var b = moment([2017, 8, 11]);
console.log(a.diff(b, "month"));
console.log(a.diff(b, "year"));

console.log(moment("2024-02", "YYYY-MM").daysInMonth());
