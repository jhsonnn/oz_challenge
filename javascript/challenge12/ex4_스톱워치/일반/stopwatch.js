const pTime = document.getElementById("time")

let bRunning = false;
//시작, 중지 버튼 누른 시점부터 흐른 시간
let elaspedTime = 0;

const startBtn = document.getElementById("start")
startBtn.addEventListener("click", clickBtn)

const stopBtn = document.getElementById("stop")
stopBtn.addEventListener("click", clickBtn)

setInterval(() => {
    if(bRunning){
        update();
    }
}, 1);

function update(){
    const date = new Date();

    //밀리초 변환
    const currentTime = date.getTime();

    //시작~일시정치 차이 계산
    //현재 시간-버튼 누른 시점부터 지난 시간
    const timeElapsedFormiliSec = Math.floor(currentTime - elaspedTime);
    
    let miliSec =  timeElapsedFormiliSec % 1000;
    let sec = Math.floor((timeElapsedFormiliSec /1000) % 60);
    let min = Math.floor(timeElapsedFormiliSec/(1000 * 60))%60;

    pTime.textContent = `경과 시간: ${min}:${sec}:${miliSec}`   
}

function clickBtn(){
    const currentTime = new Date().getTime();

    if(bRunning){
        elaspedTime = currentTime - elaspedTime;
    }else{
        elaspedTime = currentTime - elaspedTime;
    }
    bRunning = !bRunning;
}