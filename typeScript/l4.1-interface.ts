interface Group {
  // 1- not allwoed
  // title:string= "abc";
  // public titile = string;
  // private city = string;

  // its allowed
  readonly state: string;

  //   2- not allowed
  //   name: string;
  //   constructor(){

  //   };
  //   print(){

  //   }
  //   static encrypt(){

  //   }

  //   allowed here
  print(text: string): void;
}

class GroupImps implements Group {
  state = "maharashtra";

  print(text: string): void {
    console.log("Hello", text, this.state);
  }
}

const g = new GroupImps();
g.print("Topper Skills");
