// l5-1to10.js
// print 1 to 10

for (var i = 1; i > 0; --i) {
  console.log("i:- ", i);
}

for (var j = 1; j <= 10; ++j) {
  console.log("j:- ", j);
}

//1 to 10
for (var i = 1, j = 10; i <= 10; ++i, --j) {
  console.log(i + " " + j);
}

for (var i = 1, j = 10, k = 10; i < 10; ++i, --j, --k) {
  console.log(i, " ", j, " ", k);
}
