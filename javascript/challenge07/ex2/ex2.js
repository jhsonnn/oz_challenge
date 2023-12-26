//1번 별
const div1 = document.createElement("div")

const star1 = document.getElementById("star1__")

for(let i = 1; i<=5; i++){
    for(let j = 1; j<=i; j++){
        div1.innerHTML += "*";
    }
    div1.innerHTML += "<br>";
}
star1.appendChild(div1);

//2번 별
const div2 = document.createElement("div")
const star2 = document.getElementById("star2__")

for(let i = 1; i<=10; i++){
    const row = document.createElement("div");
    if(i<=5){
        for(let j = 1; j<=i; j++){
            row.innerHTML += "*";
        }
    }else{
        for(let j = 1; j<=11-i; j++){
            row.innerHTML += "*";
        }
    }
    div2.appendChild(row);
}
star2.appendChild(div2);


//3번 별
const div3 = document.createElement("div")
const star3 = document.getElementById("star3__")

for(let i = 1; i<= 4 ;i++){
    const row= document.createElement("div");
    
    for(let j = 1; j<=4-i; j++){
        row.innerHTML+="&nbsp";
    }
    for(let k=1; k <= 2*i-1; k++){
        row.innerHTML += "*";
    }
    div3.appendChild(row);
}
for(let i = 4; i >=1; i--){
    const row = document.createElement("div");
    for(let j = 1; j<= 4-i; j++){
        row.innerHTML += "&nbsp";
    }
    for(let k = 1; k<=2*i-1; k++){
        row.innerHTML += "*";
    }
    div3.appendChild(row);
}
div3.style.whiteSpace = "pre";
star3.appendChild(div3);
