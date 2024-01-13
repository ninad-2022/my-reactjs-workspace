// l6-fibonacchi.js
// var a = 0;
// var b = 1;
// var sum = a + b; //0+1=1, 1+2+3 or below
// var sum;
// while (sum < 100) {
//   console.log(sum);
//   a = b;
//   b = sum;
//   sum = a + b;
// }

// 0 1 = 0+1=1, 1+1=2, 2+1=3, 3+2=5, 5+3=8, 8+5=13

let a = 0;
let b = 1;
let abc;

for (i = 1; i < 10; i++) {
  console.log(a);
  abc = a + b;
  a = b;
  b = abc;
}
