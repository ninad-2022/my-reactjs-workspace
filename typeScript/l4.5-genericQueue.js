//l4.5-genericQueue.ts
var Queue = /** @class */ (function () {
    function Queue() {
        this.items = [];
    }
    Queue.prototype.push = function (item) {
        this.items.push(item);
    };
    Queue.prototype.pop = function () {
        return this.items.shift();
    };
    return Queue;
}());
var cities = new Queue();
cities.push("pune");
cities.push("Mumbai");
// cities.push(100);
// cities.push(false);
console.log(cities.pop().length);
// it acceppts any items
var Queue2 = /** @class */ (function () {
    function Queue2() {
        this.items = [];
    }
    Queue2.prototype.push = function (item) {
        this.items.push(item);
    };
    Queue2.prototype.pop = function () {
        return this.items.shift();
    };
    return Queue2;
}());
var cities2 = new Queue2();
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
var Queue3 = /** @class */ (function () {
    function Queue3() {
        this.items = [];
    }
    Queue3.prototype.push = function (item) {
        this.items.push(item);
    };
    Queue3.prototype.pull = function () {
        return this.items.shift();
    };
    return Queue3;
}());
var cities3 = new Queue3();
cities3.push("PUNE");
cities3.push("Mumbai");
// cities3.push(100);
// cities3.push(true);
// console.log(cities3.pop().toUppperCase());
// console.log(cities3.pop().toUppperCase());
