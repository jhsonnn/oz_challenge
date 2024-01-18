// 문제: 제네릭 클래스 Item<T>를 구현하고, 
// 문자열 타입의 값을 저장 및 반환하는 코드를 작성하세요.
var Item = /** @class */ (function () {
    function Item() {
    }
    Item.prototype.save = function (item) {
        this.strItem = item;
    };
    Item.prototype.getItem = function () {
        return "".concat(this.strItem);
    };
    return Item;
}());
// 여기에 Item<string> 클래스의 인스턴스를 생성하고 사용하는 코드를 작성하세요.
var instanceItem = new Item();
instanceItem.save("saveItem");
console.log(instanceItem.getItem());
