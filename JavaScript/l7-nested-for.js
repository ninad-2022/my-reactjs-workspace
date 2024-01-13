// l7-nested-for.js
for (var i = 1; i <= 10; ++i) {
  console.log(i + "I am outer loop loop");
  for (var j = 1; j <= 5; ++j) {
    console.log(j + "I am first nested loop");
    for (var k = 1; k <= 3; ++k) {
      console.log(k + "I am second nested loop");
    }
  }
}

/* first for loop will execute first statement then nested one executes till its condition  gets false
 afther that again outer loop will execue*/
