//l4.5-genericQueue.ts

class Queue {
  items: string[] = [];
  push(item: string) {
    this.items.push(item);
  }
  pop(): string {
    return this.items.shift();
  }
}
const cities = new Queue();
cities.push("pune");
cities.push("Mumbai");
// cities.push(100);
// cities.push(false);
console.log(cities.pop().length);

// it acceppts any items
class Queue2 {
  items: any[] = [];
  push(item: any) {
    this.items.push(item);
  }
  pop(): any {
    return this.items.shift();
  }
}

const cities2 = new Queue2();
console.log("pune");
console.log("mumbai");
// console.log(100); //we are getting error here
console.log(true);
console.log(cities2.pop().toUpperCase());
console.log(cities2.pop().toUpperCase());
console.log(cities2.pop().toUpperCase());
console.log(cities2.pop().toUpperCase());
console.log(cities2.pop().toUpperCase());

// here comes generic queue
// - Object can be created for different data types
// - complile time checking

class Queue3<T> {
  items: T[] = [];
  push(item: T) {
    this.items.push(item);
  }
  pull(): T {
    return this.items.shift();
  }
}

const cities3 = new Queue3<string>();
cities3.push("PUNE");
cities3.push("Mumbai");
// cities3.push(100);
// cities3.push(true);

// console.log(cities3.pop().toUppperCase());
// console.log(cities3.pop().toUppperCase());
