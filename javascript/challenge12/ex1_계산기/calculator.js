const button = document.querySelector("button");
const result = document.getElementsByClassName("result")[0];

let currentInput = ""; // 새로운 변수 추가

button.addEventListener("click", function(event){
  let id = event.target.id;

  if(isNumber(id)){
    currentInput += id; // 숫자인 경우 현재 입력에 추가
  } else if(isOp(id)){
    handleOperator(id);
  } else if(id === "C"){
    handleClear();
  } else if(id === "="){
    handleEquals();
  }

  updateResult(); // 모든 경우에 대해 결과창 업데이트
});

function isNumber(id){
  return parseInt(id);
}

function isOp(id){
  return id === "+" || id === "-" || id === "x" || id === "/";
}

function handleOperator(id){
  // 연산자인 경우 현재 입력을 계산하고 결과를 보여줌
  if(currentInput !== ""){
    result.value = calculate(currentInput, result.value, id);
    currentInput = "";
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
    result.value = calculate(currentInput, result.value, "=");
    currentInput = "";
  }
}

function updateResult(){
  // 결과창 업데이트
  result.value = currentInput || 0;
}

function calculate(currentInput, cal, op){
  let currentNum = parseInt(currentInput);
  let calNum = parseInt(cal);

  switch(op){
    case "+":
      return currentNum + calNum;
    case "-":
      return calNum - currentNum; // 순서에 주의!
    case "x":
      return currentNum * calNum;
    case "/":
      return calNum / currentNum; // 순서에 주의!
    case "=":
      return currentNum;
    default:
      return calNum;  
  }
}
