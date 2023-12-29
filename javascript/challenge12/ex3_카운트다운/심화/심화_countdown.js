
const p = document.getElementById("p")
p.style.fontWeight = "700"

const p2 = document.getElementById("p2")

setInterval(() => {
  
  
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


  p.textContent = `현재 날짜와 시간: ${weekToChar} ${monthToChar} ${day} ${year}

${hour}:${min}:${sec} GMT+0900 (한국 표준시)`


  //남은 시간 계산

  const then = new Date(2023,11,31,23,59,59);
  const timeDiffer = then - now;
  //일
  const dayRemaining = timeDiffer / (1000 * 60 * 60 * 24);
  const dayRemainingFinal = Math.floor(dayRemaining); //2일
  const differDayRemainings = dayRemaining - dayRemainingFinal; //0.29

  //시간
  const hourRemaining = differDayRemainings * 24; // 일(day)를 시간(hour)으로 환산
  const hourRemainingFinal = Math.floor(hourRemaining);
  const differHourRemainings = hourRemaining - hourRemainingFinal; //0.9 

  //분
  const minRemaining = differHourRemainings * 60;
  const minRemainingFinal = Math.floor(minRemaining);
  const differMinRemainings = minRemaining - minRemainingFinal;

  //초
  const secRemaining = differMinRemainings * 60;
  const secRemainingFinal = Math.floor(secRemaining);
  const differSecRemaining = secRemaining - secRemainingFinal;

  console.log(dayRemainingFinal)
  console.log(hourRemainingFinal)
  console.log(minRemainingFinal)
  console.log(secRemainingFinal)

  p2.textContent = `올해의 남은 시간: ${dayRemainingFinal}일 ${hourRemainingFinal}시간 ${minRemainingFinal}분
${secRemainingFinal}초 남았습니다.`
}, 1000);
