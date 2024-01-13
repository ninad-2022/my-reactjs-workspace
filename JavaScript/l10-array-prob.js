const arr1 = [1];
const arr2 = [2, 3, 4, 5];

const [n, , ...restofArray] = [...arr1, ...arr2];

console.log("val", ...restofArray);
