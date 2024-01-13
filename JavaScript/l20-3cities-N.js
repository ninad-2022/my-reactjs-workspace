//transform into uppercase which starts from N
var cities = ["mumbai", "nashik", "Nagpur", "aurangabad"];

for (var i in cities) {
  var city = cities[i];
  if (city.charAt().toLowerCase() == "n") {
    cities[i] = city.toUpperCase();
  }
}
console.log(cities);
