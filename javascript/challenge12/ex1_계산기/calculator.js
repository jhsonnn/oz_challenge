const button = document.querySelector("table");
const result = document.querySelector(".result");

let currentInput = ""; // 새로운 변수 추가

button.addEventListener("click", function(event){
  //이렇게 받아 온 id는 객체임
  let buttonText = event.target.textContent;
  console.log(buttonText)

  if(isNumber(buttonText)){
    currentInput += buttonText; // 숫자인 경우 현재 입력에 추가
  } else if(isOp(buttonText)){
    currentInput += buttonText;
    handleOperator(buttonText);
  } else if(buttonText === "C"){
    handleClear();
  } else if(buttonText === "="){
    handleEquals();
  }

  updateResult(); // 모든 경우에 대해 결과창 업데이트
});

function isNumber(buttonText){
  //객체인 id를 숫자로 반환
  //숫자 아니면 true
  return !isNaN(buttonText);
}

function isOp(buttonText){
  return buttonText === "+" || buttonText === "-" || buttonText === "*" || buttonText === "/";
}

function handleOperator(buttonText){
  // 연산자인 경우 현재 입력을 계산하고 결과를 보여줌
  if(currentInput !== ""){
    result.value = calculate(currentInput, result.value, buttonText)
  }
}

function handleClear(){
  // C 버튼 클릭 시 초기화
  currentInput = "";
  result.value = 0;
}

function handleEquals(){
  // = 버튼 클릭 시 현재 입력을 계산하고 결과를 보여줌
  if(currentInput !== ""){
    currentInput = result.value;    
    result.value = calculate(currentInput, result.value, "=");
    currentInput = "";
   
  }
}
function calculate(currentInput, cal, buttonText){
  let currentNum = parseInt(currentInput);
  let calNum = parseInt(cal);

  switch(buttonText){
    case "+":
      console.log("스위치 실행")
      console.log(`결과값 : ${currentNum+calNum}`)
      return currentNum+calNum;
    case "-":
      return calNum-currentNum;
    case "*":
      return currentNum * calNum;
    case "/":
      return calNum / currentNum;
    case "=":
      return currentNum;
    default:
      return calNum;  
  }
}

function updateResult(){
  // 결과창 업데이트
  result.value = currentInput;
}


