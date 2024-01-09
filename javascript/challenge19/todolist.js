const todoList = document.getElementById("todo-list")
const todoForm = document.getElementById("todo-form")

let todoArr = [];


//화면에 표시
function displayTodos(){
    todoList.innerHTML = ""
    todoArr.forEach(function(aTodo){
        const todoItem = document.createElement("li")
        //li만들어질 때마다 옆에 지우는 버튼 추가
        const todoDelBtn = document.createElement("span")
        todoDelBtn.textContent = 'x'
        todoItem.title = "클릭하면 완료"
        todoDelBtn.title = "클릭하면 삭제"
        todoItem.textContent = aTodo.todoText
        if(aTodo.todoIsDone){
            todoItem.classList.add("done")
        }else{
            todoItem.classList.add("yet")
        }

        todoItem.addEventListener("click", function(){
            handelTodoItemClick(aTodo.todoId)
        })
        console.log(todoArr)
        todoDelBtn.addEventListener("click", function(){
            handleTodoDelBtnClick(aTodo.todoId)
        })

        todoItem.appendChild(todoDelBtn)
        todoList.appendChild(todoItem)
    })
}

//수정하기
//할일 목록 완료되면 색 변화
function handelTodoItemClick(clickedId){
    //클릭하면 li의 id 받아서 그 id의 클래스만 수정하도록
    //map ; 여러 개의 할 일 중 클릭한 것만 todoIsDone 상태 변경
    todoArr = todoArr.map(function(aTodo){
        if(aTodo.todoId === clickedId){
            //색변경(클래스 변경)
            return{
                ...aTodo, todoIsDone: !aTodo.todoIsDone
            }     
        }else{
            return aTodo
        }
    })
    displayTodos()
    saveTodos();

}



//추가
todoForm.addEventListener("submit", function(e){
    //submit 할때마다 새로고침 안되게
    e.preventDefault()

    const toBeAdded = {
        todoText: todoForm.todo.value,
        todoId: new Date().getTime(),
        todoIsDone: false
    }
    //추가버튼 누르고 input 안에 있는 내용 지워주기
    todoForm.todo.value=""
    todoArr.push(toBeAdded)

    displayTodos();

    saveTodos();
    //console.log(todoArr)
})

//삭제하기
function handleTodoDelBtnClick(clickedId){
    //필터링
    //클릭된 것만 제외하고 나머지는 남기기
    todoArr = todoArr.filter(function(aTodo){
        return aTodo.todoId !== clickedId
    })

    displayTodos()
    saveTodos();

}


//로컬 스토리지에 저장하기
function saveTodos(){
    //배열에 객체가 포함되어 있으므로 stringify해줘야함
    const todoString = JSON.stringify(todoArr)
    localStorage.setItem("myTodos", todoString)
}


//로컬 스토리지에서 불러오기
//페이지 열 때만 가져오기
function loadTodos(myTodos){
    if(myTodos !== null){
        const myTodos = localStorage.getItem("myTodos")
        todoArr = JSON.parse(myTodos)
        displayTodos()
    }
    
}
loadTodos();