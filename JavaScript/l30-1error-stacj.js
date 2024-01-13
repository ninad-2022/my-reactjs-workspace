function f1() {
  f2();
  console.log("f1");
}

function f2() {
  f3();
  console.log("f2");
}

//it creates internal error obj
function f3() {
  try {
    f4();
  } catch (e) {
    console.log(e.message);
  }
  f4();
  console.log("f3");
}

function f4() {
  console.log("f4", abcd);
}
f1();
