//l14-NaN.js

console.log(isNaN(10 + 20));
console.log(Number.isNaN("avx"));

console.log(isNaN(10 + undefined));
console.log(Number.isNaN(10 + undefined));

console.log(isNaN(10 + "20"));
console.log(Number.isNaN(10 + "20"));

console.log(isNaN(false));
console.log(Number.isNaN(false));

console.log(isNaN({}));
console.log(Number.isNaN({}));
console.log(isNaN(10 / 0));
console.log(Number.isNaN(10 / 0));
