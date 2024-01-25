"use strict";
class Country {
    constructor(code, name, capital) {
        this.code = code;
        this.name = name;
        this.capital = capital;
    }
    displayInfo() {
        return `${this.name} (Code: ${this.code}). Capital: ${this.capital}`;
    }
}
// 여기에 City 클래스를 Country 클래스로부터 상속받아 정의하고, displayCapital 메서드를 추가하세요.
class City extends Country {
    constructor(cityName, code, name, capital) {
        super(code, name, capital);
        this.cityName = cityName;
    }
    displayCapital() {
        return `${this.cityName} ${this.displayInfo()}`;
    }
}
let city = new City("Seoul", 82, "South Korea", "Seoul");
console.log(city.displayCapital());
