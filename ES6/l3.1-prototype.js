// l3.1-prototype.js

const people = {
  name: "Rahul",
  branch: "Civil",
  country: "India",
  origin: "Asian",
};

const community = {
  asian: "Hinduism",
  europe: "Christianity",
  middleEast: "Islam",
  esrael: "Judaism",
};

const nature = {
  equality: "Human",
  gender: "male-female-LGBTQ",
};

//accessing prototype
Object.setPrototypeOf(community, nature);
console.log(community.__proto__);
console.log(community.__proto__.__proto__);
console.log(community.__proto__.__proto__.__proto__);
