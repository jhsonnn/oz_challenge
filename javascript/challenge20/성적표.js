const name = document.getElementsByClassName("name")
const score= document.getElementsByClassName("score")
const tableDiv = document.querySelector(".table")

var data=[
    {이름: '짱구', 점수: 45},
    {이름: '유리', 점수: 75},
    {이름: '맹구', 점수: 95},
    {이름: '수지', 점수: 50},
    {이름: '철수', 점수: 86},
    {이름: '훈이', 점수: 68}
];

function createTable(data){
    let table = document.createElement("table")
    let headerRow = table.insertRow(0);

    for(let key in data[0]){
        let headerCell = headerRow.insertCell();
        headerCell.textContent = key;
    }

    for(let i = 0; i < data.length; i++){
        let row = table.insertRow();
        for(let key in data[i]){
            let cell = row.insertCell();
            cell.textContent = data[i][key];
        }
    }
    return table;
}

tableDiv.appendChild(createTable(data));


//75점 넘는 사람 출력
const over75List = document.getElementById("over75List")
const over75ListName = data.filter(사람 => 사람.점수 > 75)

if(over75ListName.length > 0){
    over75List.textContent = over75ListName.map(사람 => 사람.이름).join(', ')
}