//Deep_Cloning
//here we are cloning the object and then editing another object.
// - outer properties and inner object created and refers to their indiviual location i.e different memory blocks  
var person = {
  name: "Topper Skills",
  mobile: "1234567890",
  address: {
    city: "Pune",
    country: "India",
  },
};

/***********deep cloning**************/
//making object into string stringfiy()
var jsonObj = JSON.stringify(person);

//Cloning the object in person2 but for that we need to stringfiy() as we did above then parse()
var person2 = JSON.parse(jsonObj);

//Editing the object
person.name = "Omkar kale";
person.address.city = "Pune";

person2.name = "Ninad Bhoir";
person2.address.city = "Navi Mumbai";
//print edited orginal object here
console.log("person-", person);
//print clonned object here
console.log("person2-", person2);
