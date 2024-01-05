const inputText = document.querySelector("#input")
const resultBtn = document.querySelector("#resultBtn")
const playerChoiceText = document.querySelector("#playerChoiceText")
const computerChoiceText = document.querySelector("#computerChoiceText")
const resutText = document.querySelector("#result")

const choiceArray = ["가위", "바위", "보"]
let computerChoice = [];
let myChoice;
let result;



resultBtn.addEventListener("click", function(){
    computerChoice = getRandomComputerChoice();
    //console.log(computerChoice)
    myChoice=inputText.value
    console.log(myChoice)
    switch(myChoice){
        case "가위":
            if(computerChoice === "가위"){
                result = "비겼습니다"
            }else if(computerChoice == "바위"){
                result = "졌습니다"
            }else{ result = "이겼습니다!" }
            break;
        case "바위":
            if(computerChoice == "바위"){
                result = "비겼습니다"
            }else if(computerChoice=="보"){
                result = "졌습니다"
            }else{ result = "이겼습니다!" }
            break;
        case "보":
            if(computerChoice == "보"){
                result = "비겼습니다"
            }else if(computerChoice == "가위"){
                result = "졌습니다"
            }else{ result = "이겼습니다!" }
            break;
        default:
            break;
    }
    drawMyChoice();
    drawComputerChoice();
    drawResult();
})
function drawMyChoice(){
    playerChoiceText.textContent = `${myChoice}`
}
function drawResult(){
    resutText.textContent = `${result}`
}
function drawComputerChoice(){
    computerChoiceText.textContent = `${computerChoice}`
}
function getRandomComputerChoice(){
    const randomIndex = Math.floor(Math.random() * choiceArray.length);
    return choiceArray[randomIndex];
}
