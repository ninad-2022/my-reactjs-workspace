function addition(a, b) {
  console.log(addition.arguments);
  console.log(arguments.callee.name);
  console.log(arguments.callee.caller.name);
  console.log(typeof arguments);
  return a + b;
}

function whoAdd() {
  addition(1, 2); //callee- who is called by the function
}

whoAdd(); //caller - who calls the function
