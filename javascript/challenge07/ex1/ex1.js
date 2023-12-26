let score = parseInt(prompt("중간고사 점수를 입력하세요."))
let grade;

if(score>=90){
    grade="A"
}else if(score>=80 && score<=89){
    grade="B"
}else if(score>=70 && score<=79){
    grade="C"
}else if(score>=60 && score<=69){
    grade="D"
}else{
    grade="F"
}

document.write(`나의 기말고사 점수는 ${score}점, 학점은 ${grade}!!!`)

