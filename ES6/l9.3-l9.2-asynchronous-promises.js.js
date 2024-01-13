/*
l9.2-asynchronous-promises.js.js
- we can use Promises without taking variable
- we can asssign second callback inside then() it will take it as reject callback
- then() can take two callback
*/

new Promise((resolve, reject) => {
  setTimeout(() => {
    // const data = "i am a data";
    const data = undefined;
    if (data) resolve(data);
    else reject("could not fetched the data");
  }, 3000);
})
  //when we call the resolve, it internally calls .then(), you will get the data passed as an paramter to resolve() as a paratmeter of the then
  .then(
    (getData) => {
      //sucess activity
      console.log("printing the data:-", getData);
    },
    //here we are taking .catch() after .then() for error handeling
    (err) => {
      console.log(err);
    }
  );
//   .catch((err) => {
//     //failure- error handeling
//     console.log(err);
//   });

