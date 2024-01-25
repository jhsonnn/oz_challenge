{
//문제: User 인터페이스가 주어졌을 때,
//모든 속성을 선택적으로 만드는 새로운 타입을 만드세요.
interface User {
    id: number;
    name: string;
    email: string;
}
// 여기에 새로운 타입을 만드세요.
type PartialUser = Partial<User>
const user: PartialUser = {
    id: 123,
}


//문제: Product 인터페이스가 주어졌을 때,
//이 인터페이스의 모든 속성을 읽기 전용으로 만드는 새로운 타입을 만드세요.
interface Product {
    id: number;
    name: string;
    price: number;
}
// 여기에 새로운 타입을 만드세요.
type ReadonlyProduct = Readonly<Product>

const product:ReadonlyProduct = {
    id: 123,
    name: "John",
    price: 100
}


//문제: Role과 Permissions 타입이 주어졌을 때,
//각 Role에 대한 Permissions을 매핑하는 새로운 타입을 만드세요.
//시도1
// type Role = ["admin"| "user"| "guest"];
// type Permissions = ["read"|"write"|"delete"[];

// type RolePermissions = [Role[keyof ]Permissions]: Role[Permissions];

//시도2
// type Role = ["admin", "user", "guest"];
// type Permissions = ["read", "write","delete"];

// type RolePermissions = [keyof Permissions]: Role[Permissions];

//시도3
//Ok
type Role = "admin"| "user"| "guest";
type Permissions = "read"|"write"|"delete";

type RolePermissions = {[P in Role]: Permissions[]};

const rolePermissions: RolePermissions = {
    admin: ["read", "write", "delete"],
    user: ["read", "write"],
    guest: ["read"],
}
console.log(rolePermissions)


//시도4
//Ok
// type Role = ["admin" | "user" | "guest"];
// type Permissions = ["read" | "write" | "delete"];

// type RolePermissions = {
//   [P in Role[number]]: Permissions[number];
// };

// const rolePermissions: RolePermissions = {
//   admin: "delete",
//   user: "write",
//   guest: "read",
// };

// console.log(rolePermissions)

// type Role = "admin" | "user" | "guest";
// type Permissions = "read" | "write" | "delete";
// // 여기에 새로운 타입을 만드세요.// 여기에 새로운 타입을 만드세요.
// type RolePermissions = Record<Role, Permissions[]>;


//문제: HandleRequest 타입을 정의하고, 
//Parameters 유틸리티 타입을 사용하여 HandleRequest 함수의 매개변수 타입을 추출한 후, 
//이를 사용하여 processRequest 함수를 구현하세요. 
//HandleRequest 함수는 요청 URL(url)과 요청 방식(method)을 매개변수로 받습니다.

// 여기에 HandleRequest 함수 타입을 정의하세요.
type HandleRequset = (url: string, method: string) => void;


// 여기에 RequestParams 타입을 정의하세요.
type RequestParams = Parameters<HandleRequset>

// 여기에 processRequest 함수를 구현하세요.
function processRequest(...params: RequestParams){
    const[ url, method ] = params;
}

processRequest("https://aaa.com", "method")

}