let icecreamArray = [];

const addBtn = document.querySelector("#addBtn");
const printOneByOneBtn = document.querySelector("#printOneByOneBtn");
const printTotalListBtn = document.querySelector("#printTotalListBtn");
const h3 = document.getElementById("h3");
const span = document.getElementById("span");


addBtn.addEventListener("click", function(){
    let input = window.prompt("추가하고 싶은 아이스크림의 이름을 입력해주세요");
    icecreamArray[0] = "메로나"

    if(input){
        icecreamArray.push(input);
    }
})
printOneByOneBtn.addEventListener("click", function(){
    icecreamArray.forEach(element => {
        alert(element)
    });
})
printTotalListBtn.addEventListener("click", function(){
    // 첫 번째 아이스크림은 앞에 쉼표를 붙이지 않기 위해 별도 처리
    if (icecreamArray.length > 0) {
        span.textContent = icecreamArray[0];
    }

    // 나머지 아이스크림은 쉼표로 구분하여 더함
    for (let i = 1; i < icecreamArray.length; i++) {
        span.textContent += `, ${icecreamArray[i]}`;
    }

   if(span){
        h3.innerHTML = ""; // 메로나 제거
        h3.textContent = icecreamArray;
   }else{
        console.error("span is null");
   }
});