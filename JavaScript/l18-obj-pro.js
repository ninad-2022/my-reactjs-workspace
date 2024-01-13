//object properties
var abc = "country"
var person = {
    firstName: "Topper",
    "last name" : "skills",
    mobile: "7505675674",
    email: "shu@gmail.com",
    city: "pune",
    [abc]:"India"
};
console.log(person);

//object prop values
var person = {
    name: "Ninad Bhoir",
    age : 22,
    isActive:true,
    mobile: 43964926539,
    address: { street: "Navi mumbai", city:"Koperkhairane"},
    adharNo: undefined,
    gst: null,
    printProfile: function() {
        console.log("Name: " + this.name);
    },

};
console.log(person);
person.printProfile();