import TODOS from "./todos.js";

function displayLists() {
  let listsDisplay = document.getElementById("lists-display");
  listsDisplay.innerHTML = "";

  let defaultListHeader = document.createElement("h2");
  defaultListHeader.textContent = TODOS.defaultList.title;
  listsDisplay.appendChild(defaultListHeader);

  for (let item of TODOS.defaultList.content) {
    if (item.type === "list") {
      let listHeader = document.createElement("h3");
      listHeader.textContent = item.title;
      listsDisplay.appendChild(listHeader);
    }
  }
}

function displayTodos(list = TODOS.defaultList) {
  const todosDisplay = document.getElementById("todos-display");
  todosDisplay.innerHTML = "";

  for (let todo of list.content) {
    let todoView = document.createElement("div");
    todoView.className = "todoView";

    let todoHeader = document.createElement("h1");
    todoHeader.textContent = todo.title;

    todoView.append(todoHeader);
    todosDisplay.appendChild(todoView);
  }
}

function newList() {
  const newListTitleInput = document.getElementById("newListInput");
  let listName = newListTitleInput.value;

  TODOS.defaultList.addToList(TODOS.list(listName));
  displayLists();
}

const newListBttn = document.getElementById("newListBttn");
newListBttn.onclick = () => newList();

const newTodoBttn = document.getElementById("newTodoBttn");
const newTodoForm = document.getElementById("newTodoForm");
const saveTodoBttn = document.getElementById("saveTodoBttn");

newTodoBttn.onclick = () => {
  newTodoForm.style = "display: flex; flex-direction: column";
};

saveTodoBttn.onclick = (e) => {
  e.preventDefault();

  let todoTitle = document.getElementById("todoTitleInput").value;
  let todoDescription = document.getElementById("todoDescriptionInput").value;

  let newTodo = TODOS.todo(todoTitle, todoDescription);
  TODOS.defaultList.addToList(newTodo);

  newTodoForm.reset();
  newTodoForm.style.display = "none";
  displayTodos();
};

displayLists();
displayTodos();
