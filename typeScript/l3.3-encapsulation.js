//l3.3-encapsulation.ts
// tsc fileName.ts --target es5
// tsc l3.3-encapsulation.ts --target es5
var Person2 = /** @class */ (function () {
    function Person2(id, _name, city) {
        this.id = id;
        this._name = _name;
        this.city = city;
    }
    //setter
    Person2.prototype.setId = function (id) {
        if (id > 0)
            this.id = id;
    };
    //   getter
    Person2.prototype.getId = function () {
        return this.id;
    };
    Object.defineProperty(Person2.prototype, "name", {
        //getter
        get: function () {
            return this._name;
        },
        //setter
        set: function (n) {
            if (n.length >= 3)
                this._name = n;
        },
        enumerable: false,
        configurable: true
    });
    return Person2;
}());
var personObj = new Person2(11, "n.Developer", "Navi-mumbai");
personObj.setId(12);
personObj.name = "Ninad";
console.log(personObj.getId());
console.log(personObj.name);
