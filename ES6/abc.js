// for (let i = 1; i <= 6; i++) {
//   let f = i % 2 == 0, //2,4,6
//     b = i % 3 == 0; //3,6
//   console.log(f ? (b ? "23" : "2") : b ? "3" : "x");
// }

// var functionfun = (function (a) {
//   delete a;
//   return a;
// })(0);

// console.log(functionfun);

// const myPromise = new Promise((resolve, reject) => {
//   resolve(1);
// });
// myPromise
//   .then((a) => {
//     return promise2;
//   })
//   .then((a) => {
//     return promise3;
//   })
//   .then((a) => {
//     console.log(a);
//   });
// const promise2 = new Promise((resolve, reject) => {
//   resolve(2);
// });
// const promise3 = new Promise((resolve, reject) => {
//   resolve(3);
// });

// class Counter {
//   #number = 10;

//   increment() {
//     this.#number++;
//   }

//   getNum() {
//     return this.#number;
//   }
// }

// const counter = new Counter();
// counter.increment();

// console.log(counter.#number);

// var myClass1 = function () {
//   return new Number(1);
// };

// var myClass2 = function () {
//   return Number(2);
// };

// console.log(
//   new myClass1() instanceof myClass1,
//   new myClass2() instanceof myClass2
// );

// let c = { greeting: "Hey!" };
// let d;

// d = c;
// c.greeting = "Hello";
// console.log(d.greeting);

// duplicate = function () {
//   return this.join(this);
// }[("a", "b", "c", "d")].duplicate();

// var a = {
//   currentValue: 0,
//   valueOf() {
//     return (this.currentValue += 1);
//   },
// };
// var eq = a == 1 && a == 2 && a == 3;
// console.log(eq);

// function fun() {
//   let var1 = (var2 = 0);
//   var1++;
//   return var1;
// }

// fun();
// console.log(typeof var1);
// console.log(typeof var2);

// (function test() {
//   var test = {
//     property: "Value",

//     getPropertyValue: function () {
//       return this.property;
//     },
//   };

//   var getPropertyValue = test.getPropertyValue;

//   console.log(getPropertyValue(), test.getPropertyValue());
// })();

// var present = (function () {
//   var book = 0;
//   function change(val) {
//     book += val;
//   }
//   return {
//     increment: function () {
//       change(1);
//     },
//     decrement: function () {
//       change(-1);
//     },
//     value: function () {
//       return book;
//     },
//   };
// })();

// console.log(present.value());
// present.increment();
// present.increment();
// console.log(present.value());
// present.decrement();
// console.log(present.value());

// function idHandler() {
//   var id = 1;

//   var _getId = function () {
//     return id;
//   };

//   var _setId = function (newId) {
//     id = newId;
//   };

//   return {
//     getId: _getId,
//     setId: _setId,
//   };
// }

// var idH = idHandler();
// console.log(idH.getId());
// console.log(idH.setId(2));
// console.log(idH.getId());

function There() {
  var count = 0;

  setTimeout(function () {
    var innerCount = 0;
    count += 2;
    console.log(count);

    setTimeout(function () {
      count += 5;
      innerCount += 1;
      console.log(count + " " + innerCount);
    }, 500);
  }, 1000);
}

There();
