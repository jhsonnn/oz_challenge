{
//문제: HTML 문서에
//"button1", "button2", "button3" 등의 id를 가진 여러 개의 버튼이 있습니다.
//document.querySelectorAll 메서드와 NodeListOf<HTMLButtonElement>를 사용하여
//이들 버튼에 클릭 이벤트 리스너를 추가하고, 
//클릭 시 해당 버튼의 id를 콘솔에 출력하는 타입스크립트 코드를 작성하세요.

// const buttons = document.querySelectorAll<HTMLButtonElement>("button");
// buttons.forEach((element: HTMLButtonElement)=>{
//     element.addEventListener("click", ()=>{
//         console.log(element.id)
//     })
// })

//문제: 함수 processData는
//string | string[] | number | number[] 타입의 매개변수를 받습니다.
//typeof 연산자와 Array.isArray() 함수를 사용하여 매개변수의 타입을 좁혀,
//문자열이나 숫자일 경우 그 값을 콘솔에 출력하고,
//배열일 경우 각 요소를 콘솔에 출력하는 타입스크립트 코드를 작성하세요.

// function processData(data: string | string[] | number | number[]): void {
//     // 여기에 타입스크립트 코드를 작성하세요.
//     if (typeof data === "string" || typeof data === "number") {
//         console.log(data);
//     } else if (Array.isArray(data)) {
//         for (const item of data) {
//             console.log(item);
//         }
//     }
// }

// //Product 인터페이스가 주어졌을 때,
// //해당 인터페이스를 변형하는 세 가지 다른 유틸리티 타입을 적용하여 새로운 타입을 만드세요.
// //첫 번째 타입은 모든 속성을 선택적으로 만들어야 하고,
// //두 번째 타입은 모든 속성을 읽기 전용으로 만들어야 하며,
// //세 번째 타입은 id 속성만을 포함해야 합니다.
// //각 타입에 대한 변수를 선언하고 초기화하세요.

// interface Product {
//     id: number;
//     name: string;
//     price: number;
//   }
//   // 여기에 세 가지 새로운 타입을 만드세요.
//   //모든 속성을 선택적 Partial<>
//   type PartialProduct = Partial<Product>;
//   //모든 속성을 읽기 전용으로 ReadOnly<>
//   type ReadOnlyProduct = Readonly<Product>;
//   //id 속성만을 포함해야함
//   type ProductWithIdOnly = Pick<Product, "id">

//   // 각 타입에 대한 변수를 선언하고 초기화하세요.
//   const partialProduct = {
//     id: 123,
//     name: "Keyboard",
//     price: 200
//   }
//   const readOnlyProduct = {
//     id: 1234,
//     name: "Mouse",
//     price: 100
//   }
//   const ProductWithIdOnly = {
//     id: 12345,
//   }



//문제: 함수 handleRequest의 매개변수 타입을 사용하여 
//다른 함수 logRequest를 구현하세요.
//logRequest 함수는 handleRequest와 동일한 매개변수를 받아 로그를 출력합니다.
// type HandleRequest = (url: string, method: string) => void;

// // 여기에 logRequest 함수를 구현하세요.
// type Param = Parameters<HandleRequest>;

// function logRequest(...params: Param){
//     const [url, method] = params;
// }



//문제: StatusCodes 객체를 상수 단언을 사용하여 생성하세요.
//이 객체는 HTTP 상태 코드와 그에 해당하는 메시지를 키-값 쌍으로 가집니다
//(예: "404": "Not Found").
//이 객체를 사용하여 주어진 상태 코드에 대한 메시지를 반환하는 함수를 작성하세요.

// 여기에 StatusCodes 객체를 생성하세요.
export const StatusCodes = {
    401: "Gone",
    403: "Forbidden",
    404: "Not Found",
    500 : "Server Error",
}as const;
// 주어진 상태 코드에 대한 메시지를 반환하는 함수를 작성하세요.
export type statusCodeKeys = keyof typeof StatusCodes;

function handleStatus(statusCode: statusCodeKeys){
    const message = StatusCodes[statusCode];
    return message;
}

}