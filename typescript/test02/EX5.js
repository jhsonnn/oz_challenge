"use strict";
//문제: 객체 config를 생성하고,
//이를 상수 단언을 사용하여 변경 불가능하게 만드세요. 
//config 객체는 server와 port 속성을 가져야 합니다.
//그 후 config의 server 속성을 변경하려고 시도하고,
//이 때의 타입스크립트 컴파일러의 반응을 관찰하세요.
// 여기에 config 객체를 생성하고 상수 단언을 적용하세요.
const config = {
    server: "server",
    port: 8080
};
// config의 server 속성을 변경하려는 시도를 하세요.
config.server = "server2";
const productStatus = {
    inStock: "Available",
    inventory: 100,
};
productStatus.inStock = "outOfStock";
//컴파일러의 반응 : read-only 프로퍼티이기 때문에 값 할당할 수 없음
