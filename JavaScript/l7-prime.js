/* the number which can only divided by 1 or itself is called prime number */
// l7-prime.js
var num = 2;
var isPrime = true;

// i-
// cond-
// inc-

for (var i = 2; i <= num / 2; i++) {
  if (num % i == 0) isPrime = false;
}

if (isPrime) {
  console.log("Prime Number");
} else {
  console.log("Not prime number");
}

/*
2    10/2=5 
3        5
4        5
5        5
6        5
*/
