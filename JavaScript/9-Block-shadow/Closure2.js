function a() {
  let c = 10;
  function x() {
    console.log(c++);
  }
  return x;
}

let u = a(); //closure
u();
u();
u();
u();
