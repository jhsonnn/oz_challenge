"use strict";
//문제: checkPositiveNumber 함수를 호출하는 코드를 작성하세요. 
//이 함수를 호출할 때 양수인 숫자와 음수인 숫자를 각각 한 번 이상 넣어서 
//양수와 음수에 대한 에러 처리를 테스트하세요.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// 문제 1: 양수와 음수에 대한 에러 처리를 테스트하는 TypeScript 코드를 작성하세요.
// checkPositiveNumber 함수는 주어진 숫자가 양수인지 확인하고, 양수라면 메시지를 출력합니다.
// 그렇지 않으면 "number should be positive"라는 에러 메시지를 throw 합니다.
// 함수 시그니처: function checkPositiveNumber(num: number): void
// 여기에 코드를 작성하세요.
// function checkPositiveNumber(num: number): void{
//     if(num < 0){
//         throw new Error("number should be positive")
//     }
//     console.log(`${num} is a positive number`)
// }
// try{
//     checkPositiveNumber(100);
//     checkPositiveNumber(-100);
// }catch(error: unknown){
//     if(error instanceof Error){
//         console.error(error.message);
//     }
// }
//문제: CustomError 클래스를 사용하여 사용자 정의 에러를 발생시키고, 
//이 에러를 try-catch 구문을 사용하여 처리하는 TypeScript 코드를 작성하세요.
// 문제 2: CustomError 클래스를 사용하여 사용자 정의 에러를 발생시키고, 이 에러를 처리하는 TypeScript 코드를 작성하세요.
// CustomError 클래스는 Error 클래스를 상속하여 사용자 정의 에러를 만듭니다.
// 에러 메시지는 생성자에서 전달받습니다.
// 클래스 시그니처: class CustomError extends Error
// 여기에 코드를 작성하세요.
// class CustomError extends Error{
//     constructor(message: string){
//         super(message);
//         this.name = "custom error";
//     }
// }
// try{
//     throw new CustomError("custom error...")
// }catch(error){
//     if(error instanceof CustomError){
//         console.error(error.message);
//     }
// }
//문제: 아래 코드를 참고하여, 
//fetchData 함수가 완료될 때까지 기다렸다가 결과를 출력하는 main 함수를 작성하세요.
const fetchData = () => {
    return new Promise((resolve, reject) => {
        // 비동기 작업 수행
        const success = true;
        if (success) {
            resolve("data fetch complete");
        }
        else {
            reject("Something went wrong");
        }
    });
};
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // fetchData 함수를 호출하고 결과를 출력하는 코드를 작성하세요.
        try {
            const data = yield fetchData();
            console.log(data);
        }
        catch (error) {
            console.error(error);
        }
    });
}
main();
