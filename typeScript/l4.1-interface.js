var GroupImps = /** @class */ (function () {
    function GroupImps() {
        this.state = "maharashtar";
    }
    GroupImps.prototype.print = function (text) {
        console.log("Hello", text, this.state);
    };
    return GroupImps;
}());
var g = new GroupImps();
g.print("Topper Skilsl");
