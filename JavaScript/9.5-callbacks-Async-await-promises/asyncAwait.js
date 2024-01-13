const datas = [
  { name: "Ninad", profession: "Software engineer" },
  { name: "Akash", profession: "Software engineer" },
];

const showData = () => {
  // setTimeout(() => {
  datas.forEach((value, index) => {
    console.log(value);
  });
  // }, 1000);
};

const createData = (inputData, callback) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      datas.push(inputData);
      resolve();
    }, 2000);
  });
};

function ab() {
  console.log("hii");
}
// by using asyc await
async function start() {
  //await makes wait the whole code until createData() get resolve as we have call resolve() in the createData() irrespective of the timer you have given to it and then execate below line
  await createData({
    name: "nameAsync",
    profession: "make async js till me finished",
  });
  // below line will execuate as per ur given sync or async operation call to it
  showData();
  console.log("abcd");
  ab();
  console.log("cc");
  console.log("abcdefghijkl");
}

start();

let var1 = 10;
var var2 = 20;

let var3 = var1;
let var4 = var2;
