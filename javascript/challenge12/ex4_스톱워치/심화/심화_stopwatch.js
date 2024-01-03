const pTime = document.getElementById("time")

let stop_Watch = {
    bRunning : false,
    //시작, 중지 버튼 누른 시점부터 흐른 시간
    startTime: 0,
    endTime: 0,
    elaspedTime : 0,

    start(){
        if(!this.bRunning){
            this.startTime = new Date().getTime();
            this.bRunning = true;
            console.log("시작버튼클릭")
            console.log(this.startTime)
            console.log(this.elaspedTime)
            
        }
    },
    stop(){
        if(this.bRunning){
            this.endTime = new Date().getTime();
            this.bRunning = false;
            this.elaspedTime += this.endTime - this.startTime;
            
        }
    },

}

const startBtn = document.getElementById("start")
startBtn.addEventListener("click", stop_Watch.start.bind(stop_Watch))

const stopBtn = document.getElementById("stop")
stopBtn.addEventListener("click", stop_Watch.stop.bind(stop_Watch))


setInterval(() => {
    if(stop_Watch.bRunning){
        update();
    }
}, 1);

function update(){
    //밀리초 변환
    const currentTime = new Date().getTime();
    const elaspedTime = stop_Watch.elaspedTime;
    //시작~일시정치 차이 계산
    //현재 시간-버튼 누른 시점부터 지난 시간
    const timeElapsedFormiliSec = Math.floor(currentTime - elaspedTime);
    
    let miliSec =  timeElapsedFormiliSec % 1000;
    let sec = Math.floor((timeElapsedFormiliSec /1000) % 60);
    let min = Math.floor(timeElapsedFormiliSec/(1000 * 60))%60;

    pTime.textContent = `경과 시간: ${min}:${sec}:${miliSec}`   
}