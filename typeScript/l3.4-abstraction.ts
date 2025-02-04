/*
l3.4-abstraction.ts
  - It is a mechanism of hiding the implementation and showing only necessary functionality.
  - By using Abstraction you can make a system simple to use.
*/

// setting the rules
abstract class GroupRules {
  constructor() {
    console.log("GroupRules construction");
  }
  
  abstract createGroup(): void;
  abstract addTitle(title: string): void;
  abstract addIcon(icon: string): void;
  abstract addParticipants(arr: Object[]): void;
}
class Group extends GroupRules {
  title: string;
  id: number;
  participants: Object[];
  icon: string;

  createGroup() {
    console.log("group created");
  }
  addIcon(icon: string): void {
    this.icon = icon;
  }
  addParticipants(arr) {
    this.participants = arr;
  }
  addTitle(title) {
    this.title = title;
  }
}

const obj = new Group();
console.log(obj);

// void says method doesnt return anything
