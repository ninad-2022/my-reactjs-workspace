//l27-factory-function.js
//factory function - preffered in indutry for calling obj in function
function createUser(name, mobile, email) {
  return { name: name, mobile, email }; //only type parameter not name
}
var obj = createUser("Ninad", "3273473643", "abc@gmail.com");
console.log(obj);
