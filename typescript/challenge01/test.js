// class Country {
//     private code: number;
//     public name: string;
//     protected capital: string;
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
//     constructor(code: number, name: string, capital: string) {
//         this.code = code;
//         this.name = name;
//         this.capital = capital;
//     }
//     displayInfo(): string {
//         return `${this.name} (Code: ${this.code}). Capital: ${this.capital}`;
//     }
// }
// // 여기에 City 클래스를 Country 클래스로부터 상속받아 정의하고, displayCapital 메서드를 추가하세요.
// class City extends Country{
// 	cityName: string;
// 	constructor(cityName: string, code: number, name: string, capital: string){
// 		super(code, name, capital)
// 		this.cityName = cityName;
// 	}
// 	displayCapital(): string{
// 		return `${this.cityName} ${this.displayInfo()}`;
// 	}
// }
// let city = new City("Seoul", 82, "South Korea", "Seoul")
// console.log(city.displayCapital())
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
        return "displayInfo called!!";
    };
    return SpecificCountry;
}(AbstractCountry));
var instanceSpecificCountry = new SpecificCountry("South Korea", "Seoul");
console.log(instanceSpecificCountry.displayInfo());
