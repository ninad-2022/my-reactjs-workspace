let rad = [1, 2, 3, 4, 5, 6];

//hof
const hof = (arr, logic) => {
  const ab = [];
  for (let i = 0; i < arr.length; i++) {
    const rad = arr[i];
    ab.push(logic(rad));
  }
  return ab;
};

//logic
const dia = (radius) => {
  return 2 * radius;
};

const circ = (radius) => {
  return 2 * Math.PI * radius;
};

console.log(hof(rad, dia));
console.log(hof(rad, circ));

let arr2 = [3, 4, 0, 6, 7, 8];

Array.prototype.ownMap = function (logic) {
  const ab = [];
  for (let i = 0; i < this.length; i++) {
    ab.push(logic(this[i]));
  }
  return ab;
};

console.log(arr2.ownMap(dia));
