"use strict";
//문제: 함수 processInput은 number 또는 string 타입의 매개변수 input을 받습니다.
// 입력된 input이 숫자인 경우 "Number received"를,
//문자열인 경우 "String received"를 콘솔에 출력하는 코드를 작성하세요.
function processDevice(device) {
    // 여기에 타입스크립트 코드를 작성하세요.
    if ("call" in device) {
        device.call();
    }
    else if ("draw" in device) {
        device.draw();
    }
}
