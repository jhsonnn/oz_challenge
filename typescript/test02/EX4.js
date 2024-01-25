"use strict";
{
    const user = {
        id: 123,
    };
    const product = {
        id: 123,
        name: "John",
        price: 100
    };
    const rolePermissions = {
        admin: ["read", "write", "delete"],
        user: ["read", "write"],
        guest: ["read"],
    };
    console.log(rolePermissions);
    // 여기에 processRequest 함수를 구현하세요.
    function processRequest(...params) {
        const [url, method] = params;
    }
    processRequest("https://aaa.com", "method");
}
