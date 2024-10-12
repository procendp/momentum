const toDoForm = document.getElementById("todoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todoList");
const TODOS_KEY = "todos";
// const toDos = [];   // 상수 const로 선언하면 app 시작할 때 항상 array 비어있고, 웹 새로고침할 때마다 localStorage 날아감
let toDos = [];        // 따라서 변수 let으로 바꿔주자 우선

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));   // JSON.stringify : localStorage에 string으로 담고 싶을 때 활용 (Javascript 코드를 string으로 바꿔 전달)
}

function deleteToDo(event){
    const deleteTarget = event.target.parentElement;                // 클릭 시, 무엇을 클릭했는지 확인 <target>
    deleteTarget.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(deleteTarget.id));    // filter : return 값이 false인 조건들을 기존 array에서 제외하고 표현해줌 (지운 건 아님)    // toDo.id : int, deleteTarget.id : string ==> 따라서 parseInt 사용하여 int로 변경 후 비교
}

function paintToDo(newTodoObj/*newTodo*/){
    const li = document.createElement("li");
    li.id = newTodoObj.id;  // text 형태에서 obj 형태로 바꿨으니 id 맞춰줘야함
    const span = document.createElement("span");
    // span.innerText = newTodo;
    span.innerText = newTodoObj.text;   // obj의 text
    const button = document.createElement("button");

    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo =  toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),         // ms로 들어오는 수이기 때문에 id로 활용 가능
    };
    toDos.push(newTodoObj);     // input값들 todos에 먼저 담아줌
    paintToDo(newTodoObj);
    saveToDos();                // todos를 localStorage에 저장하기 위함
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);     // JSON.parse : savedToDos 요소들을 배열로 받아옴   // 새로고침해도 남아있는 localStorage 불러옴
    toDos = parsedToDos;                            // 가져와서 복원 (toDos를 let으로 선언했으니, 덮어쓰지 않고 계속 추가 가능)
    parsedToDos.forEach(paintToDo);
    // parsedToDos.forEach((item) => /*function*/paintToDo);  // forEach() : Javascript에서의 array(parsedToDos)가 가지고 있는 각각의 item들에 대해 function 실행하게 해줌..  그리고 function 짧게 보여주는 람다식(arrow function)

}