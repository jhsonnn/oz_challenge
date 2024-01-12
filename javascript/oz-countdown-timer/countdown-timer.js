//타겟날짜
var targetDate = new Date("Jan 12, 2024 19:00:00").getTime();

//Interval 설정
var interval = setInterval(function() {
    const tiles = document.getElementById("tiles")
    var now = new Date().getTime();
    var elapsed = targetDate - now;
        
    var days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
    var hours = Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((elapsed % (1000 * 60)) / 1000);
   
    tiles.innerHTML = "<span>" + days + 
                             "</span><span>" + hours + 
                             "</span><span>" + minutes + 
                             "</span><span>" + seconds + 
                            "</span>";

    //타겟보다 작아지면 Interval Clear
    if (elapsed < 0) {
        clearInterval(interval);
        document.getElementsByClassName("toTargetDate").innerHTML = "";
    }

}, 1000);

