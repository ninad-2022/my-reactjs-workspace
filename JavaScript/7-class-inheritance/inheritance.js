class Person {
  // initilaize
  constructor(name, mobile, email, city) {
    this.name = name;
    this.mobile = mobile;
    this.email = email;
    this.city = city;
  }

  printProfile() {
    console.log(this.name);
  }
}

class Students extends Person {
  rollNo;
}

class Parent extends Person {
  parentID;
}

class Teacher extends Person {
  constructor(name, mobile, email, city, empId, salary) {
    //for accessing prop of parent
    super(name, email, city, empId, salary);

    this.empId = empId;
    this.salary = salary;
  }
}

const teacher = new Teacher(
  "Komal",
  79824379823,
  "kom@gmail.com",
  "Raigad",
  12,
  51000
);
console.log(teacher);
teacher.printProfile();
