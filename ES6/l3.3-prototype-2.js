// l3.3-prototype-2.js
const emp1 = {
  id: 1,
  name: "aa",
  mobile: 321,
};

const emp2 = {
  id: 2,
  name: "bb",
  mobile: 4837264,
};

const proto = {
  company: "Wipro",
  printProfile() {
    console.log("name", this.name, "mobile", this.mobile);
  },
};

Object.setPrototypeOf(emp1, proto);
Object.setPrototypeOf(emp2, proto);

console.log(emp2.__proto__);
console.log(emp2.__proto__.__proto__);
console.log(emp2.company);
emp1.printProfile();
