let arr = [1, 2, 3, 2, 3, 4, 4, 5, 6, 7];

const result = arr.filter((val, index) => {
  return arr.indexOf(val) == index;
});
const result2 = arr.filter((val, index) => arr.indexOf(val) != index);

console.log(result);
console.log(result2);

// const result = arr.filter((val, ind) => arr.indexOf(val) != ind);
// const result2 = arr.filter((val, ind) => arr.indexOf(val) == ind);

// console.log("not duplicate", result2);
// console.log("duplicate", result);

// async function ab(a, b) {
//   const ab = (await a) + b;
//   console.log(ab);
//   console.log("ninad");
// }
// ab(2, 4);
