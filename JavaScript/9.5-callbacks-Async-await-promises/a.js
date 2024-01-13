const datas = [
  { name: "Ninad", profession: "Software engineer" },
  { name: "Akash", profession: "Software engineer" },
];

const showData = () => {
  setTimeout(() => {
    let output = "";
    datas.forEach((value, index) => {
      output += `<li>${value.name}</li>`;
    });

    document.body.innerHTML = output;
  }, 1000);
};

const createData = async (inputData, callback) => {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      datas.push(inputData);
      // let error = false;
      // if (!error) {
      resolve();
      // } else {
      //   reject("promise is rejected");
      // }
    }, 2000);
  });
};

// by using async await
async function start() {
  await createData({
    name: "nameAsync",
    profession: "make async js till me finished",
  });
  showData();
}

start();
