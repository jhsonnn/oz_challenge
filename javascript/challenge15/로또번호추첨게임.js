const todaySpan = document.querySelector("#today")
const numbersDiv = document.querySelector(".numbers")
const drawBtn = document.querySelector("#draw")
const resetBtn = document.querySelector("#reset")

let randomNums = []

//날짜 표시
const today = new Date()
let year = today.getFullYear();
let month = today.getMonth()+1;
let date = today.getDate();
todaySpan.textContent = `${year}년 ${month}월 ${date}일`

function paintNumber(num){
    const eachNumDiv = document.createElement("div")
    eachNumDiv.classList.add("eachNum")
    eachNumDiv.textContent = num
    numbersDiv.append(eachNumDiv)
}

drawBtn.addEventListener("click", function(){
    while(randomNums.length < 6){
        let rn = Math.floor((Math.random()*45)+1)

        if(randomNums.indexOf(rn)===-1){//아직 같은 숫자 없음
            randomNums.push(rn) //그때 push

            //화면 출력 함수
            paintNumber(rn)
        }
        
    }
})

resetBtn.addEventListener("click", function(){
    randomNums.splice(0, 6) //시작위치 0 ~ 그로부터 6개 지움
    numbersDiv.innerHTML = ""
})
