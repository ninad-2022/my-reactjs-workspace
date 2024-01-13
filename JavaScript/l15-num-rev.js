var num = 123456;
var rev = 0;
while (num != 0) {
  //for saving remainder by using modulo operator
  rev = rev * 10 + (num % 10); //0 * 10 + (123456 % 10 = 6)
  //parseInt for floor division
  num = parseInt(num / 10);
  //printing the steps for reverse
  console.log("step-reverse:" + rev);
}
console.log("reverse:" + rev);

//or
var num2 = 123456; //12,245
var rnum = 0; //6
while (num2 > 0) {
  var d = num2 % 10; //6
  num2 = Math.floor(num2 / 10); //12,245
  rnum = rnum * 10 + d; //0 + 6
}
console.log("digit: ", d);
console.log("num: ", num2);
