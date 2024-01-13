var pattern = /^[0-9]+$/;
var pattern2 = new RegExp("^[]+$");

console.log(pattern.test("abc123"));
console.log(pattern.test("123"));

console.log(pattern2.test("abc123"));
console.log(pattern2.test("123"));
console.log(pattern2.test("abc"));

let reg = /harry/;
reg = /harry/g;
// reg = /harry/i;
var c = "This is the harry Hary tribute to the harry bruh";
// var regs = reg.exec(c);
// console.log(regs);
// regs = reg.exec(c);
// console.log(regs);
// regs = reg.exec(c);
// console.log(regs);
// regs = reg.exec(c);
// console.log(regs);

// var resu = c.match(reg);
// console.log(resu);

var repl = c.replace(reg, "Ninad");
console.log(repl);
