/*
l3.4-abstraction.ts
  - It is a mechanism of hiding the implementation and showing only necessary functionality to the user.
  - By using Abstraction you can make a system simple to use.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// setting the rules
var GroupRules = /** @class */ (function () {
    function GroupRules() {
        console.log("GroupRules construction");
    }
    return GroupRules;
}());
var Group = /** @class */ (function (_super) {
    __extends(Group, _super);
    function Group() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Group.prototype.createGroup = function () {
        console.log("group created");
    };
    Group.prototype.addIcon = function (icon) {
        this.icon = icon;
    };
    Group.prototype.addParticipants = function (arr) {
        this.participants = arr;
    };
    Group.prototype.addTitle = function (title) {
        this.title = title;
    };
    return Group;
}(GroupRules));
var obj = new Group();
console.log(obj);
// void says method doesnt return anything
