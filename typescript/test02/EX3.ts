//문제: 교차 타입을 사용하여 Employee와 Manager 인터페이스를 결합한
//새로운 타입 EmployeeManager를 만드세요.
// Employee 인터페이스는 name과 id 속성을,
//Manager 인터페이스는 department과 reportsTo 속성을 가지고 있어야 합니다.
// interface Employee {
//     // Employee 인터페이스 구현
//     id: number;
//     name: string;
//     email: string;
// }
  
//   interface Manager {
//     // Manager 인터페이스 구현
//     department: string;
    
//   }
  
//   // 여기에 EmployeeManager 교차 타입을 만드세요.
//   type EmployeeManager = Employee & Manager;
  
//   const employeeManager: EmployeeManager = {
//     id: 123,
//     name: "John",
//     email: "test@email.com",
//     department: "HR",
//   }



//문제: keyof 연산자를 사용하여 주어진 객체 타입의 모든 키를 나열하는 
//getAllKeys 함수를 구현하세요.
//이 함수는 객체 타입 T를 매개변수로 받고,
//T의 모든 키를 문자열 배열로 반환합니다.

function getAllKeys<T extends object>(obj: T): Array<keyof T> {
    // 여기에 함수 구현을 작성하세요.
    return Object.keys(obj) as Array<keyof T>;
}



//문제: 매핑 타입을 사용하여,
//주어진 인터페이스의 모든 속성을 선택적(Optional)으로 만드는
//MakeOptional 타입을 만드세요.
//예를 들어,
//MakeOptional<{ name: string; age: number; }>은
//{ name?: string; age?: number; } 타입과 동일해야 합니다.

type MakeOptional<T> = {
    // 여기에 매핑 타입 구현을 작성하세요.
    [P in keyof T]?: T[P]
};