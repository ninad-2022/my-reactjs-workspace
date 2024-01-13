// l25-func-factorial

function fac(num) {
  if (num === 0) return 1;
  return num * fac(num - 1);
}

console.log(fac(5));
