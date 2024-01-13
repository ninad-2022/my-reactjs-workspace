//l2.6-default-value.js

// function add(a, b) {

//we can set default value to parameter
const defValue = () => 20; //creating a default value 20
//assigning the default value to  parameter "b"
function add(a, b = defValue()) {
  console.log(a + b);
}

add(10);
add(10, 10);
