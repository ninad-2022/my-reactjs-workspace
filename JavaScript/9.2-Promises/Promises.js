const getData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => {
      var a = response.json();
      console.log(a);
    })
    .catch((reject) => {
      console.log(reject);
    });
};

getData("peru");
