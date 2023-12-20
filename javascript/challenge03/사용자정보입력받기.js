//이름
const nameElement = document.querySelector("#name")
let name = prompt("이름은 무엇입니까?")
nameElement.textContent = `이름은 ${name} 입니다.`;

//좋아하는 동물
const animalElement = document.querySelector("#animal")
let animal = prompt("좋아하는 동물은 무엇입니까?")
animalElement.textContent = `좋아하는 동물은 ${animal} 입니다.`;

//좋아하는 과일
const fruitElement = document.querySelector("#fruit")
let fruit = prompt("좋아하는 과일은 무엇입니까?");
fruitElement.textContent = `좋아하는 과일은 ${fruit} 입니다.`;