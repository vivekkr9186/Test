var Car1 = /** @class */ (function () {
    function Car1(engine) {
        this.engine = engine;
    }
    Car1.prototype.Display = function () {
        console.log("Engine is " + this.engine);
    };
    return Car1;
}());
var obj = new Car1("R15");
console.log(obj.engine);
console.log(obj.Display());
