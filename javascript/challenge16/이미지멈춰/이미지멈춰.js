const images = document.querySelector("#images")

let stopSign = false;
let eachImages = ["images/중요한건꺾였는데도그냥하는마음.png",
                  "images/열심히는하지만노력은안한다.jpg",
                  "images/늦었다고생각할때가진짜너무늦었다.jpg",
                  "images/고생끝에골병난다.jpg"
                 ];

let currentIndex = 0;
let intervalID;

//images 인덱스 바꾸는 함수
function changeImages(){
    images.style.backgroundImage = "url(" + eachImages[currentIndex] + ")";
    //끝나면 다시 0번 인덱스로 돌아감
    currentIndex = (currentIndex + 1) % eachImages.length;
}
changeImages();

//이미지 자동으로 바꾸기
intervalID = setInterval(function(){
    if(stopSign){
        //멈추도록
        clearInterval(intervalID);
    }else{
        changeImages();
    }

}, 800)


const stopBtn = document.getElementById("stopBtn");
stopBtn.addEventListener("click", function(){
    stopSign = true;
})