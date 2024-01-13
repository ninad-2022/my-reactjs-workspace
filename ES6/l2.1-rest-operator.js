//l2.1-rest-operator.js
//rest operator- it gives remaining values
//normal function
// function add(a, b) {
//     console.log(a+b);
// }

//by using rest
function add(a, b, ...args) {
  console.log(a, b);
  console.log(args);
}

add(10, 20);
// //it returns a array
add(10, 20, 30, 40, 50, 60, 70);

const person = {
  name: "topper skills",
  mobile: 898934278938974,
  email: "bdw@gma.com",
  city: "Pune",
  country: "India",
};

//obj destructing with rest operator
// "...remain" it gives
const { name, mobile, email, ...remain } = person;
console.log(name, mobile, email, remain);
//it returns remaining values.l
console.log(remain);
