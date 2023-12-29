
const trDan = document.getElementById("dan")
const trResult = document.getElementById("result")

for(let i = 2; i <=9; i++){
  trDan.innerHTML += `<td>${i}단</td>`;
  for(let j = 1; j<=9; j++){
    if(j===1){
      trResult.innerHTML += `<td id=${i}></td>`
    }
    const trDanResult = document.getElementById(`${i}`)
    trDanResult.innerHTML += `${i} * ${j} = ${i*j}<br>`
  }
}