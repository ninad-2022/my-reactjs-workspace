let x = {},
  y = { name: "Ronny" },
  z = { name: "John" };

// assigining y as a key in x
x[y] = { name: "Vivek" };
x[z] = { name: "Akki" };
console.log(x[y]);
console.log(x[z]);
console.log(x);
