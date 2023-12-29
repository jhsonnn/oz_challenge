const div = document.querySelector("div");

for(let i = 2; i <=9; i++){
  div.innerHTML += `${i}단<br>`;
  div.innerHTML += "<br>"
  for(let j = 1; j<=9; j++){
    div.innerHTML += `${i} x ${j} = ${i*j}<br>`;
  }
  div.innerHTML += "<br>"
}