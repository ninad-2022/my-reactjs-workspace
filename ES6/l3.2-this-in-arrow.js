name = "global name";
const person = {
  name: "Topper Skills",
  mobile: "7875580668",
  city: "Pune",
  profile: function () {
    // return function () {
    //   console.log("Name: ", this.name);
    // };
    return () => {
      console.log("Name: ", this.name);
    };
  },
};
const inner = person.profile();
inner(); //global



// named or anonymous function arguments
const func = function () {
  console.log(arguments);
};
func(10, 20);


//arrow function arguments
const func2 = () => {
  console.log(arguments);
};
func2(10, 20);
