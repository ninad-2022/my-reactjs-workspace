// l4.2-inheritance-extend.js
class person {
  name;
  mobile;
  email;
  city;
  printProfile() {
    console.log(this.name);
  }
}

class Students extends person {
  rollNo;
}
class Parent extends person {
  parentId;
}
class Teacher extends person {
  empId;
  salary;
}

const student = new Students();
const parent = new Parent();
const teacher = new Teacher();

//it gives only name
console.log("students:-" + student, "parent:-" + parent, "teacher:-" + teacher);

//it gives all the methods
console.log(student, parent, teacher);

console.log((student.name = "ninad"));

console.log((teacher.name = "Minakshi"));
console.log(teacher);
