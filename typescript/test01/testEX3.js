"use strict";
{
    //Continent 클래스를 확장하고
    //CountryInterface 인터페이스를 구현하는 Country 클래스를 만듭니다.
    //Country 클래스에는 countryName이라는 public 속성을 포함하고, 
    //CountryInterface에 정의된 메서드를 구현하세요.
    //이를 통해 클래스의 확장과 인터페이스 구현 순서의 중요성을 이해해보세요.
    class Continent {
        constructor(name) {
            this.continentName = name;
        }
    }
    // 여기에 Country 클래스를 Continent 클래스로부터 확장하고 
    // CountryInterface 인터페이스를 구현하세요.
    class Country extends Continent {
        constructor(continentName, countryName) {
            super(continentName);
            this.countryName = countryName;
        }
        getCountryInfo() {
            return `${this.countryName}, ContinentName: ${this.continentName}`;
        }
    }
    let southKorea = new Country("SouthKorea", "Asia");
    console.log(southKorea.getCountryInfo());
}
