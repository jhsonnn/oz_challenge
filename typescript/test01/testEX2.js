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
var AbstractCountry = /** @class */ (function () {
    function AbstractCountry(name, capital) {
        this.name = name;
        this.capital = capital;
    }
    return AbstractCountry;
}());
// 여기에 SpecificCountry 클래스를 AbstractCountry로부터 상속받아 정의하고, displayInfo 메서드를 구현하세요.
var SpecificCountry = /** @class */ (function (_super) {
    __extends(SpecificCountry, _super);
    function SpecificCountry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpecificCountry.prototype.displayInfo = function () {
        return "displayInfo called!!!";
    };
    return SpecificCountry;
}(AbstractCountry));
var instanceSpecificCountry = new SpecificCountry("South Korea", "Seoul");
instanceSpecificCountry.displayInfo();
