import TODOS from "./todos.js";

let workingList = TODOS.defaultList;

function refreshLists() {
  let listsDisplay = document.getElementById("lists-display");
  listsDisplay.innerHTML = "";
  displayDefaultList();

  for (let item of TODOS.defaultList.content) {
    if (item.type === "list") {
      let listHeader = document.createElement("h2");
      listHeader.textContent = item.title;
      listHeader.className = "list-sidebar-header";
      listHeader.setAttribute("list-id", item.id);
      listHeader.onclick = (e) => selectList(e);
      if (workingList.id === item.id) listHeader.classList.add("selected-list");
      listsDisplay.appendChild(listHeader);
    }
  }
}

function selectList(e) {
  let selectedListHeader = e.target;

  workingList = TODOS.findList(selectedListHeader.getAttribute("list-id"));
  //   displayTodos(selectedListId);
  refreshLists();
  displayTodos();
}

function displayTodos() {
  const EMPTY_LIST_WARNING = `
    <div>
        <hr style="width=60%; margin: 1rem"></hr>
        <p style="text-align: center">You haven't added any TODOS to this List/Project yet! Add some above to see them here</p>
    </div>`;

  function todoView(todo) {
    let todoView = document.createElement("div");
    todoView.className = "todoView";

    let todoHeader = document.createElement("h2");
    todoHeader.textContent = todo.title;

    todoView.append(todoHeader);
    return todoView;
  }

  function listView(list) {
    const lV = document.createElement("div");
    lV.className = "todo-list";

    let lHeader = document.createElement("h1");
    lHeader.textContent = list.title;
    lHeader.className = "list-title-header";

    lV.appendChild(lHeader);
    if (list.content.length === 0)
      lV.insertAdjacentHTML("beforeend", EMPTY_LIST_WARNING);

    return lV;
  }

  function topListview() {
    const EMPTY_LIST_WARNING = `
    <div>
        <hr style="width=60%; margin: 1rem"></hr>
        <p style="text-align: center">You haven't added any TODOS yet! Create a new List/Project in the sidebar or add a new TODO above to see them here!</p>
    </div>`;

    let listHeader = document.createElement("h1");
    listHeader.textContent = workingList.title;
    listHeader.style.textAlign = "center";

    todosDisplay.appendChild(listHeader);

    if (workingList.content.length === 0) {
      todosDisplay.insertAdjacentHTML("beforeend", EMPTY_LIST_WARNING);
    } else {
      for (let item of workingList.content) {
        // if item is a list: create a list view and a todo view for each of its todos
        //  - add listView to the DOM
        // if item is a todo: create a todo view and add it to the DOM
        if (item.type === "list") {
          let listDisplay = listView(item);

          for (let i of item.content) {
            let todo = todoView(i);
            listDisplay.appendChild(todo);
          }
          todosDisplay.appendChild(listDisplay);
        } else {
          let todo = todoView(item);
          todosDisplay.appendChild(todo);
        }
      }
    }
  }

  let todosDisplay = document.getElementById("todos-display");
  todosDisplay.innerHTML = "";
  if (workingList === TODOS.defaultList) {
    topListview();
  } else {
    todosDisplay.appendChild(listView(workingList));
  }
}

function newList() {
  const newListTitleInput = document.getElementById("newListInput");
  let listName = newListTitleInput.value.trim();
  if (!listName) {
    newListTitleInput.value = "";
    return;
  }

  newListTitleInput.value = "";

  TODOS.defaultList.addToList(TODOS.list(listName));
  refreshLists();
  displayTodos();
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
  e.preventDefault(); // Prevent the form from submitting

  let todoTitle = document.getElementById("todoTitleInput");

  if (!todoTitle.value.trim()) {
    // Set custom validity and show the message if not already invalid
    if (todoTitle.validity.valid) {
      todoTitle.setCustomValidity("Must title TODO");
      todoTitle.reportValidity();
    }
    return; // Stop further execution
  } else {
    // Clear custom validity when the input is valid
    todoTitle.setCustomValidity("");
  }

  let todoDescription = document.getElementById("todoDescriptionInput").value;

  let newTodo = TODOS.todo(todoTitle.value, todoDescription);
  TODOS.defaultList.addToList(newTodo);

  newTodoForm.reset();
  newTodoForm.style.display = "none";
  displayTodos();
};

// Clear the message as the user types valid input
document.getElementById("todoTitleInput").addEventListener("input", (e) => {
  const input = e.target;
  if (input.value.trim()) {
    input.setCustomValidity(""); // Clear validity when input is valid
  }
});

function displayDefaultList() {
  let listsDisplay = document.getElementById("lists-display");

  let defaultListHeader = document.createElement("h2");
  defaultListHeader.textContent = TODOS.defaultList.title;
  defaultListHeader.setAttribute("list-id", TODOS.defaultList.id);

  defaultListHeader.id = "defaultList";

  defaultListHeader.classList.add("list-sidebar-header");

  workingList.id == TODOS.defaultList.id &&
    defaultListHeader.classList.add("selected-list");

  defaultListHeader.onclick = (e) => selectList(e);

  listsDisplay.appendChild(defaultListHeader);
}

refreshLists();
displayTodos();
