//문제: 함수 processInput은 number 또는 string 타입의 매개변수 input을 받습니다.
// 입력된 input이 숫자인 경우 "Number received"를,
//문자열인 경우 "String received"를 콘솔에 출력하는 코드를 작성하세요.

// type i = number | string;

// function processInput(input: i){
//     if(typeof input === "string"){
//         console.log("String received")
//     }else if(typeof input === "number"){
//         console.log("Number received")
//     }
// }


//문제: LightState 타입을 "on" | "off"의 유니언 타입으로 정의하고,
// changeLightState 함수를 구현합니다. 
//이 함수에서는 매개변수의 값이 "on"인지 "off"인지를 확인하고, 
//그에 맞는 메시지를 콘솔에 출력합니다.

// 여기에 LightState 타입을 정의하세요.
// type LightState = "on" | "off"

// // 여기에 changeLightState 함수를 구현하세요.
// function changeLightStates(param: LightState){
//     if(param === "on"){
//         console.log("on")
//     }else if(param === "off"){
//         console.log("off")
//     }
// }



//두 가지 타입의 객체를 구별하는 함수 processDevice를 구현하세요.
//이 함수는 Smartphone 타입과 Tablet 타입의 객체 중 하나를 매개변수로 받습니다.
//Smartphone 객체에는 call 메서드가 있고,
//Tablet 객체에는 draw 메서드가 있습니다.
//함수는 in 키워드를 사용하여 객체 타입을 확인하고, 각 타입에 맞는 메서드를 호출합니다.

type Smartphone = {
    call: () => void;
  };
  
  type Tablet = {
    draw: () => void;
  };
  
  function processDevice(device: Smartphone | Tablet) {
    // 여기에 타입스크립트 코드를 작성하세요.
    if("call" in device){
        device.call();
    }else if("draw" in device){
        device.draw();
    }
  }
