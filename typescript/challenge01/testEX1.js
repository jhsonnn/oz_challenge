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
var Country = /** @class */ (function () {
    function Country(code, name, capital) {
        this.code = code;
        this.name = name;
        this.capital = capital;
    }
    Country.prototype.displayInfo = function () {
        return "".concat(this.name, " (Code: ").concat(this.code, "). Capital: ").concat(this.capital);
    };
    return Country;
}());
// 여기에 City 클래스를 Country 클래스로부터 상속받아 정의하고, displayCapital 메서드를 추가하세요.
var City = /** @class */ (function (_super) {
    __extends(City, _super);
    function City(cityName, code, name, capital) {
        var _this = _super.call(this, code, name, capital) || this;
        _this.cityName = cityName;
        return _this;
    }
    City.prototype.displayCapital = function () {
        return "".concat(this.cityName, " ").concat(this.displayInfo());
    };
    return City;
}(Country));
var city = new City("Seoul", 82, "South Korea", "Seoul");
console.log(city.displayCapital());
