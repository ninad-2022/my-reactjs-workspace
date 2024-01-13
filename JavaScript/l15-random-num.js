var random = Math.random();
console.log(random);
console.log(Math.floor(random * 10));
console.log(Math.floor(random * 100));
console.log(Math.floor(random * 1000));

//we can assign a function to a variable and call that variable as function as given below
var ran = Math.random;
console.log(ran);
console.log(ran());
