// l4.2-generic.ts
// - same function can take different datatpes
// - dataTypes are known at the time of compilation
// - use <T> t stands for dataType
// - you can use <string>
// function printVal(text: any): any {
//   console.log(text);
//   return text;
// }
// console.log(printVal("abcd").length);
// console.log(printVal(1000).length); //undefined
//it will only take the same value.
//it is call specific type function
// function privateVal2(text: string): string {
//   console.log(text);
//   return text;
// }
// console.log(privateVal2("abcd").length);
// console.log(privateVal2(123).indexOf()); //not return anything
function privateGenric(text) {
    console.log(text);
    return text;
}
console.log(privateGenric(100).toFixed());
console.log(privateGenric("string").length);
console.log(privateGenric(true).valueOf());
var totalChar = privateGenric("abcd").length;
console.log(totalChar);
