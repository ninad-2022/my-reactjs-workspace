//l1.7-readonly.ts
var Employee = /** @class */ (function () {
    function Employee(id, name, city) {
        this.id = id;
        this.name = name;
        this.city = city;
    }
    return Employee;
}());
var emp = new Employee(10, "Ninad", "Mumbai");
console.log(emp);
// emp.id = -1;//you cant change once you make readonly
