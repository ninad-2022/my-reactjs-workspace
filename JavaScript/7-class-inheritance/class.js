// class Product {
//   constructor(name, quantity, price) {
//     this.name = name;
//     this.quantity = quantity;
//     this.price = price;
//   }
//   print() {
//     console.log(
//       "I have a ",
//       this.name,
//       "in",
//       this.quantity,
//       "for",
//       this.price,
//       "each"
//     );
//   }
// }

// let pen = new Product("lexi-5", 2, 100);
// let laptop = new Product("Inspiron 3501", 1, 5600);
// pen.print();
// console.log(pen.price);
// laptop.print();
// console.log(laptop.price);

class Product {
  constructor(quantity, name) {
    this.quantity = quantity;
    this.name = name;
  }

  print() {
    console.log(
      "Product name is ",
      this.name,
      "having quantity of",
      this.quantity
    );
  }
}

const watch = new Product(4, "Edifice");
const bike = new Product(1, "Pulser");

console.log(bike);
console.log(watch);

watch.print();
