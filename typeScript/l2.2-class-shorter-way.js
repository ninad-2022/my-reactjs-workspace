//l2.2-class-shorter-way.ts
var Person = /** @class */ (function () {
  //   id: Number;
  //   name: string;
  //   satuts: boolean;
  //   city: string;
  function Person(id, name, satuts, city) {
    this.id = id;
    this.name = name;
    this.satuts = satuts;
    this.city = city;
    //   this.id = id;
    //   this.name = name;
    //   this.satuts = satuts;
    //   this.city = city;
  }
  return Person;
})();
var pObj = new Person(10, "n.Developer", true, "Navi-Mumbai");
