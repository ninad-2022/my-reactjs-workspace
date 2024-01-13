//l21-map-uppercase.js
//to make uppercase

var cities = ["pune", "mumbai", "shimla", "nashik", "banglore"];

var upperCaseArr = cities.map(function (city) {
  return city.toUpperCase();
});
console.log(cities);
console.log(upperCaseArr);
