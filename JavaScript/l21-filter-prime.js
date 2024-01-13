// l21-filter-prime
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const primeArray = nums.filter((num) => {
  if (num < 2) return false;
  for (i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return true;
});

console.log(primeArray);
