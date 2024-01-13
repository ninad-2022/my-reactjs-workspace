// l25-funct-recursion.js
//when we call function inside the function, it is called as function recursion

function printNums(n) {
  console.log(n);
  if (n < 100) printNums(++n);
}
printNums(0);
