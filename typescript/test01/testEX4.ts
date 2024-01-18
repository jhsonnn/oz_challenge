{
// 문제: 제네릭 함수 getFirstElement를 구현하고,
//문자열 배열에서 첫 번째 요소를 반환하는 코드를 작성하세요.

// function getFirstElement<T>(arr: T[]): T | undefined {
//   // 여기에 함수 구현을 작성하세요.
//   if(!arr.length){
//     return undefined;
//   }
//   return arr[0];
// }

// let strArray: Array<string> = ["apple", "banana", "cherry"];
// // 여기에 getFirstElement 함수를 사용하여 첫 번째 요소를 반환하는 코드를 작성하세요.
// function getFirstStringElement(arr: string[]){
//   if(!arr.length){
//     return undefined;
//   }
//   return arr[0];
// }
// console.log(getFirstStringElement(strArray))



// 문제: 제네릭 클래스 Item<T>를 구현하고, 
// 문자열 타입의 값을 저장 및 반환하는 코드를 작성하세요.
// class Item<T> {
//     // 여기에 클래스 구현을 작성하세요.
//     public strItem: T;
//     save(item: T){
//         this.strItem = item;
//     }
//     getItem(){
//         return `${this.strItem}`
//     }
// }
  
//   // 여기에 Item<string> 클래스의 인스턴스를 생성하고 사용하는 코드를 작성하세요.
// const instanceItem = new Item();
// instanceItem.save("saveItem");
// console.log(instanceItem.getItem());


//문제: 제네릭 인터페이스 Dict<T>를 구현하고, 문자열 값을 갖는 객체를 생성하세요.
// interface Dict<T> {
//   // 여기에 인터페이스 구현을 작성하세요.
//   [key: string]: T;
// }

// // 여기에 Dict<string> 타입의 객체를 생성하는 코드를 작성하세요.
// let strObj: Dict<string> = {
//   str: "string",
// }


//문제: 제네릭 타입 T를 사용하여 배열의 모든 요소를 출력하는 printArray 함수를 작성하세요.
// function printArray<T>(arr: T[]): void {
//   // 여기에 함수 구현을 작성하세요.
//   if(!arr.length){
//     console.log("nothing to print")
//   }
//   arr.forEach(element => {
//     console.log(element)
//   });
// }

// let mixedArray: Array<number | string> = [1, "two", 3, "four"];
// // 여기에 printArray 함수를 사용하여 mixedArray의 요소를 출력하는 코드를 작성하세요.
// printArray(mixedArray)



//문제: 제네릭 인터페이스 Store<T extends WithId>를 구현하고, 
//UserRepository 클래스에서 이를 사용하여 사용자를 관리하는 코드를 작성하세요.
// interface WithId {
// 	id: number;
// }

// interface User {
//   id: number;
//   name: string;
// }

// interface Store<T extends WithId> {
//   // 여기에 인터페이스 구현을 작성하세요.
// 	findById(id: number): T | undefined;
//   save(user: User): void;
// }

// class UserRepository implements Store<User> {
//   #users: User[] = [];
//   // 여기에 클래스 구현을 작성하세요.
//   findById(id: number): User | undefined {
//     return this.#users.find(user => user.id === id);
//   }

//   save(user: User): void{
//     this.#users.push(user);
//   }
// }

// // 여기에 UserRepository 인스턴스를 생성하고, 사용자를 추가 및 검색하는 코드를 작성하세요.
// const userRepo = new UserRepository()
// userRepo.save({
//   id: 1,
//   name: "John"
// })

// userRepo.findById(1)



//문제: Employee 클래스를 만들고, Country 클래스를 상속받게 하세요. 
//Employee 클래스에는 직원의 id와 department 속성을 추가하고, 
//이에 대한 정보를 출력하는 메서드를 작성하세요.

// class Country {
//   protected name: string;
//   protected capital: string;

//   constructor(name: string, capital: string) {
//     this.name = name;
//     this.capital = capital;
//   }

//   displayInfo(): string {
//     return `${this.name}, Capital: ${this.capital}`;
//   }
// }


// // 여기에 Employee 클래스를 Country 클래스로부터 상속받아 정의하고, 필요한 메서드를 추가하세요.
// class Employee extends Country{
// 	protected employeeId: number;
// 	protected department: string;
	
// 	constructor(name: string, capital: string, employeeId: number, department: string){
// 		super(name, capital)
// 		this.employeeId = employeeId;
// 		this.department = department;
// 	}
// 	displayEmployeeInfo(){
// 		return `${this.displayInfo()}, ${this.employeeId}, ${this.department}`;
// 	}
// }

// // 출력 예시
// const employee = new Employee("South Korea", "Seoul", 123, "Engineering");
// console.log(employee.displayEmployeeInfo());




//문제: 제네릭을 사용하여 Pair<K, V> 클래스를 만드세요. 
//이 클래스는 두 개의 제네릭 타입 K와 V를 갖으며, 각각 키와 값으로 사용됩니다. 
//클래스에는 키와 값을 설정하고 가져오는 메서드를 포함해야 합니다. 
//Pair 클래스를 사용하여 문자열 키와 숫자 값의 쌍을 만들고 출력하는 코드를 작성하세요.

// 여기에 Pair<K, V> 클래스를 구현하세요.
// class Pair<K, V>{
//   private key: K;
//   private value: V;

//   constructor(key: K, value: V){
//     this.key = key;
//     this.value = value;
//   }

//   setKey(key: K){
//     this.key = key;
//   }
//   setValule(value: V){
//     this.value = value;
//   }
//   getKey(): K{
//     return this.key;
//   }
//   getValue(): V{
//     return this.value;
//   }
// }
// // 출력 예시
// const pair = new Pair<string, number>("age", 30);
// console.log(`Key: ${pair.getKey()}, Value: ${pair.getValue()}`);


//문제: 제네릭을 사용하여 Queue<T> 클래스를 만드세요.
//이 클래스는 FIFO(First-In-First-Out) 방식의 큐를 구현해야 합니다.
//enqueue, dequeue, 그리고 큐의 현재 크기를 반환하는 size 메서드를 포함하세요.
//Queue 클래스를 사용하여 문자열 요소를 큐에 추가하고 제거하는 코드를 작성하세요.

// push 메서드로 새로운 요소를 큐의 뒤쪽에 추가하고, shift 메서드로 가장 앞쪽의 요소, 즉 가장 오래된 요소를 제거합니다.


// 여기에 Queue<T> 클래스를 구현하세요.
class Queue<T>{
  arr: T[] = [];

  enqueue(element: T){
    this.arr.push(element);
  }
  dequeue(): T | undefined{
    return this.arr.shift();
  }
  size(): number{
    return this.arr?.length;
  }
}

// 사용 예시
const queue = new Queue<string>();
queue.enqueue("Apple");
queue.enqueue("Banana");
console.log(queue.dequeue()); // Apple
console.log(`Queue size: ${queue.size()}`); // Queue size: 1

}