//l2.1-accessModifers.ts
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
var A = /** @class */ (function () {
  function A() {
    this.id = 11;
    this.name = "n.Developer";
    this.city = "Navi Mumbai";
  }
  A.prototype.print = function () {
    console.log(this.id);
    console.log(this.name);
    console.log(this.city);
  };
  return A;
})();
var aObj = new A();
aObj.print();
var B = /** @class */ (function (_super) {
  __extends(B, _super);
  function B() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  B.prototype.print = function () {
    // console.log(this.id); //only accessible in A because of private scope
    console.log(this.name);
    console.log(this.city);
  };
  return B;
})(A);
var bObj = new B();
bObj.print();
var C = /** @class */ (function () {
  function C() {}
  C.prototype.print = function () {
    var a = new A();
    // console.log(a.id); //only accessible in repsective class as it is private
    // console.log(a.name); //only accessible in its class and subclass as it is protected
    console.log(a.city);
  };
  return C;
})();
var cObj = new C();
cObj.print();
