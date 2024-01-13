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

const createData = (inputData, callback) => {
  //   return new Promise((resolve, reject) => {
  setTimeout(() => {
    datas.push(inputData);
    //   let error = false;
    //   if (!error) {
    //     resolve();
    //   } else {
    //     reject("promise is rejected");
    //   }
    // callback();
  }, 2000);
  //   });
};

/*
// without callback-
createData({ name: "Vinayak", profession: "Associate analyst" });
showData();
*/

/*
// by giving callback
createData({ name: "Vinayak", profession: "Associate analyst" }, showData);
*/

/*
// by using promise
createData({ name: "Vinayak", profession: "Associate analyst" })
  .then(showData)
  .catch((err) => console.log(err));
*/

// by using asyc await
const add = (a, b) => {
  console.log(a + b);
};

async function start() {
  await createData({
    name: "nameAsync",
    profession: "make async js till me finished",
  });
  showData();
  add(2, 3);
}

start();
