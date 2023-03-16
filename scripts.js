const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUl = document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem('todos'))

if (todos) {
    todos.forEach(todo => addTodo(todo))
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    addTodo();

});

function addTodo(todo) {
    let todoText = input.value;

    if (todo) {
        todoText = todo.text;
    }
    console.log(todoText);

    if (todoText) {
        const todoElement = document.createElement("li");

        
        if (todo && todo.completed) {
            todoElement.classList.add("completed");
        }
        todoElement.innerText = todoText;

        todoElement.addEventListener("click", () => {
            todoElement.classList.toggle("completed"),
                updateLS();
        })

        todoElement.addEventListener("contextmenu", function (e) {
            e.preventDefault();

            todoElement.remove();
            updateLS()
        })

        todosUl.appendChild(todoElement);

        input.value = "";

        updateLS();
    }
}

function updateLS() {
    todosEl = document.querySelectorAll('li')

    const todos = []

    todosEl.forEach(todoElement => {
        todos.push({
            text: todoElement.innerText,
            completed: todoElement.classList.contains('completed')
        })
    })
    localStorage.setItem('todos', JSON.stringify(todos))
}