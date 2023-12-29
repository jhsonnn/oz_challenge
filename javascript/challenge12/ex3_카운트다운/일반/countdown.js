const p = document.querySelector("p")
p.style.fontWeight = "700"

const now = new Date()

var weekToChar = "";
let week = new Date().getDay();
switch(week){
  case 0:
    weekToChar = "Sun"
    break;
  case 1:
    weekToChar = "Mon"
    break;
  case 2:
    weekToChar = "Tue"
    break;
  case 3:
    weekToChar = "Wed"
    break;
  case 4:
    weekToChar = "Thur"
    break;
  case 5:
    weekToChar = "Fri"
    break;
  case 6:
    weekToChar = "Sat"
    break;
}
let month = now.getMonth()+1
var monthToChar = "";
switch(month){
  case 1:
    monthToChar = "Jan"
    break;
  case 2:
    monthToChar = "Feb"
    break;
  case 3:
    monthToChar = "Mar"
    break;
  case 4:
    monthToChar = "Apr"
    break;
  case 5:
    monthToChar = "May"
    break;
  case 6:
    monthToChar = "Jun"
    break;
  case 7:
    monthToChar = "Jul"
    break;
  case 8:
    monthToChar = "Aug"
    break;
  case 9:
    monthToChar = "Sep"
    break;
  case 10:
    monthToChar = "Oct"
    break;
  case 11:
    monthToChar = "Nov"
    break;
  case 12:
    monthToChar = "Dec"
    break;
}

let day = now.getDay()
let year = now.getFullYear()
let hour = now.getHours()
let min = now.getMinutes()
let sec = now.getSeconds()


p.textContent += `현재 시간: ${weekToChar} ${monthToChar} ${day} ${year}

${hour}:${min}:${sec} GMT+0900 (한국 표준시)`


