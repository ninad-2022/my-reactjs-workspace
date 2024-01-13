// l6-even.js
//for printing even numbers.
for (var i = 1; i < 100; ++i) {
  if (i % 2 == 0) {
    console.log("even numbers:-" + i);
  }
}

//printing 10, 20, 3, 40 ,50, 60, 70, 80 ,90, 100
for (var j = 100; j > 0; --j) {
  if (j % 10 == 0) {
    console.log(j);
  }
}

/*
above statement iterates 100 times but we have to reduce that
so we will use k=k+10/ following programme for isTypedArray. below programme iterate only 10 times
*/
for (var k = 10; k <= 100; k = k + 10) {
  console.log("reducing iteration:-" + k);
}
