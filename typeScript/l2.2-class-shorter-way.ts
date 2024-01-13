/*
l2.2-class-shorter-way.ts
  - here we can create, and initialize the variable in constructor itself.
  - No need to create separate variable, then initilization.
  - see below, comment out lines are no needed while using short hand in the typeScript
*/
class Person {
  //   id: Number;
  //   name: string;
  //   satuts: boolean;
  //   city: string;

  constructor(
    private id: number,
    protected name: string,
    public satuts: boolean,
    readonly city: string
  ) {
    //   this.id = id;
    //   this.name = name;
    //   this.satuts = satuts;
    //   this.city = city;
  }
}

const pObj = new Person(10, "n.Developer", true, "Navi-Mumbai");
console.log(pObj);
