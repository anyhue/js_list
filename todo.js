const todoForm = document.querySelector("#todoform");
const todoInput = document.querySelector("#todoform input");
const todoList = document.querySelector("#todolist");

function deleteButton (event) {
    const li = event.target.parentElement;
    li.remove();
}

function todoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.appendChild(span);
    span.innerText = newTodo;
    todoList.appendChild(li);
    li.appendChild(button);
    button.innerText = "❌";
}

todoForm.addEventListener("submit", todoSubmit);
todoList.addEventListener("click", deleteButton);