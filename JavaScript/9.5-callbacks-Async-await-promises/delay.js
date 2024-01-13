const a = async () => {
  console.log("i am ready to run");
  const b = await new Promise((reso, res) => {
    setTimeout(() => {
      reso();
      console.log("Got the medal");
    }, 3000);
  });
  console.log("I reached");
};
a();

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
  return new Promise((resolve, reject) => {
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

// by using asyc await
async function start() {
  await createData({
    name: "nameAsync",
    profession: "make async js till me finished",
  });
  showData();
}

start();
/*

NOTE:
Q-  call showData() after createData() irrespective of the timer assign to them. (as i given 1000 to showData() and 2000 to createData())

Mistake-
I was trying to asign await on createData() in he start() function without returning promise in createData()

Soln-
assgin await on createData() only when you have given promise in that function and as we know, promise won't give data unitl it gets resolve in the settle phase.

*/
