abstract class AbstractCountry {
    protected name: string;
    protected capital: string;

    constructor(name: string, capital: string) {
        this.name = name;
        this.capital = capital;
    }

    abstract displayInfo(): string;
}

// 여기에 SpecificCountry 클래스를 AbstractCountry로부터 상속받아 정의하고, displayInfo 메서드를 구현하세요.
class SpecificCountry extends AbstractCountry{
	displayInfo(): string{
		return "displayInfo called!!!";
	}
}
const instanceSpecificCountry = new SpecificCountry("South Korea", "Seoul");
instanceSpecificCountry.displayInfo()