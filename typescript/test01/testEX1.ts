class Country {
    private code: number;
    public name: string;
    protected capital: string;

    constructor(code: number, name: string, capital: string) {
        this.code = code;
        this.name = name;
        this.capital = capital;
    }

    displayInfo(): string {
        return `${this.name} (Code: ${this.code}). Capital: ${this.capital}`;
    }
}

// 여기에 City 클래스를 Country 클래스로부터 상속받아 정의하고, displayCapital 메서드를 추가하세요.
class City extends Country{
	cityName: string;

	constructor(cityName: string, code: number, name: string, capital: string){
		super(code, name, capital)
		this.cityName = cityName;
	}
	displayCapital(): string{
		return `${this.cityName} ${this.displayInfo()}`;
	}
}
let city = new City("Seoul", 82, "South Korea", "Seoul")
console.log(city.displayCapital())
