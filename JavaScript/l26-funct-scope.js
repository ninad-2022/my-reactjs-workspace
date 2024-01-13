//l26-funct-scope.js

function add(a, b) {
  console.log(a, b);
}

add(10, 20); //10 20
add(); //undefined undefined
add(100, 200); //100 200
