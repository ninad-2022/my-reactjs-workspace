//l9.2-asynchronous-promises.js

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    // const data = "i am a data";
    const data = undefined;
    if (data) resolve(data);
    else reject("could not fetched the data");
  }, 3000);
});

//when we call the resolve, it internally calls .then(), you will get the data passed as an paramter to resolve() as a paratmeter of the then
p .then((getData) => {
  //sucess activity
  console.log("printing the data:-", getData);
});
p.catch((err) => {
    //failure- error handeling
  console.log(err);
});
