//l25-funct-argument-add-avg.js

//for sum
function add() {
  var sum = 0;
  for (var i of arguments) sum += i;
  return sum;
}
console.log(add(1, 2, 3, 4, 5));

//for avg
function sum() {
  var sums = 0;
  var avg = 0;
  for (var j of arguments) {
    sums += j;
  }
  return (avg = sums / arguments.length); //sum.arguments.lenth is also valid
}
console.log(sum(10, 20, 30));

function ab(x, z) {
  return arguments;
}
console.log(ab(2, 3));
