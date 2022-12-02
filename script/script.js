const input = document.querySelector('.task-input input'),
tasks = document.querySelector('.tasks'),
filters = document.querySelectorAll(".filter span"),
clearAll = document.querySelector(".clear-btn")
let edited;
let isEditedTask = false;

let todos = JSON.parse(localStorage.getItem('todo-list'));


filters.forEach(e =>{
    e.addEventListener('click', () =>{
        // console.log(a);
        document.querySelector("span.active").classList.remove("active")
        e.classList.add('active')
        showTodo(e.id)
    })
})

function showTodo(filter) {
    let str = '';
    if(todos){
        todos.forEach((todo, id) => {
            let isCompleted = todo.status == "completed" ? "checked" : ""; 
            if(filter == todo.status || filter == "All"){
                str += `
                <li class="task">
                <label for="${id}">
                    <input onclick="updateStatus(this)" type="checkbox" name="" id="${id}" ${isCompleted}>
                    <p class="p ${isCompleted}">${todo.name}</p>
                </label>
                <div class="more">
                    <i onclick="showMenu(this)" class="fa-solid fa-ellipsis"></i>
                    <ul class="task-more">              
                        <li onclick="editTask(${id}, '${todo.name}')" class="li pen"><i class="fa-solid fa-pen"></i>Edit</li>   
                        <li onclick="deleteTask(${id})" class="li trash"><i class="fa-solid fa-trash"></i>Delete</li> 
                    </ul>
                </div>
            </li>
        `;
            }

        });
    }
    tasks.innerHTML = str || `<span> Пусто...</span>`;
}
showTodo("All")

function showMenu(selectTask){
    let taskMenu = selectTask.parentElement.lastElementChild;
    taskMenu.classList.add("show")
    document.addEventListener('click', e =>{
        if(e.target.tagName != "I" || e.target != selectTask){
            taskMenu.classList.remove("show")
        }
    })
};
clearAll.addEventListener("click", () =>{
    todos.splice(0, todos.length);
    localStorage.setItem("todo-list", JSON.stringify(todos));
    showTodo("All")
})
function deleteTask(deleteId){
    // let deleted = deleteId.parentElement.lastElementChild;
    todos.splice(deleteId, 1);
    // todos[deleted].status = "delete"
    // console.log(deleteId);
    localStorage.setItem("todo-list", JSON.stringify(todos));
    showTodo("All")



}

function editTask(id, name){
    // console.log(id, name);
    edited = id
    isEditedTask = true
    input.value = name
}

function updateStatus(selectTask){
    let taskName = selectTask.parentElement.lastElementChild;
    if(selectTask.checked){
        taskName.classList.add("checked");
        todos[selectTask.id].status = "completed"
    }else{
        taskName.classList.remove("checked");
        todos[selectTask.id].status = "pending"
    } 
    localStorage.setItem("todo-list", JSON.stringify(todos));
}

input.addEventListener('keyup', (evt)=>{
    let userTask = input.value.trim();
    if(evt.key == 'Enter' && userTask){
        if(!isEditedTask){
            if(!todos){
                todos = [];
            }
            let taskInfo = {name: userTask, status: "pending"};
            todos.push(taskInfo);

        }else{
            isEditedTask = false
            todos[edited].name = userTask;
        }
        input.value = "";
        localStorage.setItem("todo-list", JSON.stringify(todos));
        showTodo("All");
    }
});