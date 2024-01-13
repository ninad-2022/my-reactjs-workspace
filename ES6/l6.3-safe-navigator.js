//l6.3-safe-navigator.js
/*
Safe navigatoin operator (?)
Call it when value is null or undefined
*/

const obj = {
  name: "aa",
  city: "Pune",
};

//turnery opeerator
console.log(obj.name ? obj.name.toUpperCase() : "");

//safe navigation operator
console.log(obj?.name?.toUpperCase());
// object?.propertyName;

//below is turnery operator
// object !=null && undefined object.propertyName : ""

//instead of using turnery operator use set navigation operator
// object?.propertyName;
