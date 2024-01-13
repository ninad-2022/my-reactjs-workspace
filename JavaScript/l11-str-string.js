var city1 = "Pune";
var city2 = "Pune"; //it will take a reference of one city1
console.log(city1 === city2); //true
var city3 = new String("Pune"); //it will create a new string in memory location
console.log(city1 === city3); //false

city1 = city1.concat(" India");
console.log(city1);

var string = "ab";
