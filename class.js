var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taxi X:".concat(point.x, " Y:").concat(point.y, " konumuna gidiyor"));
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        console.log("bus X:".concat(point.x, " Y:").concat(point.y, " konumuna gidiyor"));
    };
    return Bus;
}());
