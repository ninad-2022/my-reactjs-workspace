for (var i = 1; i <= 10; i++) {
  if (i == 5) continue;
  console.log(i);
}

for (var j = 1; j <= 10; j++) {
  if (j == 5) break;
  console.log(j);
}

function f1() {
  console.log("start");
  return;
  console.log("end");
}

f1();
