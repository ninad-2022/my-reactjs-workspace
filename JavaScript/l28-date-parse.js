// l28-date-parse.js

console.log(Date.parse("2022/01/22"));
console.log(new Date.parse(Date.parse("2022/01/22")));
console.log(Date.parse("2022/01/22, 12:30:14"));
console.log(new Date("2022/01/22"));

console.log("current Date & time", Date.now());
