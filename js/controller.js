import STORAGE from "./storage.js";

let workingList = STORAGE.masterList;

// refreshes the lists-display section, a sidebar containing the names of all the contained todo lists
// When a new list is added or a list is removed, this function is called to refresh the DOM accordingly.
function refreshLists() {
  let listsDisplay = document.getElementById("lists-display");
  listsDisplay.innerHTML = "";
  displayDefaultList();

  for (let key in STORAGE.masterList) {
    let item = STORAGE.masterList[key];
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

// when a list is selected (clicked) from the lists-display sidebar, the selected list header in the sidebar is
// styled to indicate that it is the currently selected list. refreshLists() is called to reflect the styling
// the workingList variable is updated to the selected list and displayTodos() called to display the todos within the new workingList.
function selectList(e) {
  let selectedListHeader = e.target;
  let selectedListId = selectedListHeader.getAttribute("list-id");

  workingList =
    selectedListId == STORAGE.masterList.id
      ? STORAGE.masterList
      : STORAGE.masterList[selectedListId];
  //   displayTodos(selectedListId);
  refreshLists();
  displayTodos();
}

// refreshes the todos-display section to display the todos within the workingList list. If no lists or todos have
// been added to the master/default list, displays a message for the user to add todos/lists
function displayTodos() {
  const EMPTY_LIST_WARNING = `
    <div>
        <p style="text-align: center">You haven't added any TODOS to this List/Project yet! Add some above to see them here</p>
    </div>`;

  // creates a DOM element representing the given todo. Returns the created DOM element
  function todoView(todo) {
    let todoView = document.createElement("div");
    todoView.className = "todo-view";
    todoView.setAttribute("data-id", todo.id);

    let todoCheck = document.createElement("input");
    todoCheck.type = "checkbox";
    todoCheck.className = "todo-check";
    todoCheck.checked = todo.complete;
    if (todo.complete) {
      todoView.classList.add("complete");
    }
    todoCheck.onchange = () => checkTodo(todo.list, todo.id);

    let todoHeader = document.createElement("h2");
    todoHeader.textContent = todo.title;

    let todoDescription = document.createElement("p");
    todoDescription.className = "todoDescription";
    todoDescription.textContent = todo.description;

    let todoDate = document.createElement("p");
    todoDate.className = "todoDueDate";
    if (todo.dueDate) {
      todoDate.classList.add("due");
    }
    todoDate.textContent = todo.dueDate;

    todoView.append(todoCheck);
    todoView.append(todoHeader);
    todoView.append(todoDescription);
    todoView.append(todoDate);
    return todoView;
  }

  // creates a DOM element representing a todo list. Returns the created DOM element.
  function listView(list) {
    const lV = document.createElement("div");
    lV.className = "todo-list";

    let lHeader = document.createElement("h1");
    lHeader.textContent = list.title;
    lHeader.className = "list-title-header";

    lV.appendChild(lHeader);
    lV.insertAdjacentHTML(
      "beforeend",
      '<hr style="width=60%; margin: 1rem"></hr>',
    );
    if (list.content.length === 0)
      lV.insertAdjacentHTML("beforeend", EMPTY_LIST_WARNING);
    else {
      for (let todo of list.content) {
        lV.appendChild(todoView(todo));
      }
    }
    return lV;
  }

  // creates the DOM representation of the master/default list which contains all sublists and individual todos.
  function masterListView() {
    const EMPTY_LIST_WARNING = `
    <div>
        <p style="text-align: center">You haven't added any TODOS yet! Create a new List/Project in the sidebar or add a new TODO above to see them here!</p>
    </div>`;

    let listHeader = document.createElement("h1");
    listHeader.textContent = workingList.title;
    listHeader.style.textAlign = "center";
    listHeader.insertAdjacentHTML(
      "beforeend",
      '<hr style="width=60%; margin: 1rem"></hr>',
    );

    let loneTodosSection = document.createElement("div");
    loneTodosSection.className = "lone-todos-section";
    let todoListsSection = document.createElement("div");

    todosDisplay.appendChild(listHeader);
    todosDisplay.appendChild(loneTodosSection);
    todosDisplay.appendChild(todoListsSection);

    if (Object.keys(workingList).length <= 2) {
      todosDisplay.insertAdjacentHTML("beforeend", EMPTY_LIST_WARNING);
    } else {
      for (let id in workingList) {
        let item = workingList[id];
        // if item is a list: create a list view and a todo view for each of its todos
        //  - add listView to the DOM
        // if item is a todo: create a todo view and add it to the DOM
        if (item.type === "list") {
          let listDisplay = listView(item);

          todoListsSection.appendChild(listDisplay);
        } else if (item.type === "todo") {
          let todo = todoView(item);
          loneTodosSection.appendChild(todo);
        }
      }
    }
  }

  let todosDisplay = document.getElementById("todos-display");
  todosDisplay.innerHTML = "";
  if (workingList === STORAGE.masterList) {
    masterListView();
  } else {
    todosDisplay.appendChild(listView(workingList));
  }
}

// creates a new list with the title input by user within the newListInput. clears the newListInput. Refreshes the list display
// and refreshes the todos display to contain the new list.
function newList() {
  const newListTitleInput = document.getElementById("newListInput");
  let listName = newListTitleInput.value.trim();
  if (!listName) {
    newListTitleInput.value = "";
    return;
  }

  newListTitleInput.value = "";

  STORAGE.newList(listName);
  refreshLists();
  displayTodos();
}

// creates a new todo with the input title and adds the todo view to the DOM
function saveNewTodo() {
  let todoTitle = document.getElementById("todoTitleInput");

  if (!todoTitle.value.trim()) {
    // Set custom validity and show the message if not already invalid
    if (!todoTitle.validity.valid) {
      todoTitle.setCustomValidity("Must title TODO");
      todoTitle.reportValidity();
    }
    return; // Stop further execution
  } else {
    // Clear custom validity when the input is valid
    todoTitle.setCustomValidity("");
  }

  let todoDescription = document.getElementById("todoDescriptionInput").value;

  let todoDueDate = document.getElementById("todoDueDateInput").value;

  STORAGE.newTodo(
    todoTitle.value,
    todoDescription,
    workingList.id,
    todoDueDate,
  );

  newTodoForm.reset();
  newTodoForm.style.display = "none";
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
  saveNewTodo();
};

// Clear the message as the user types valid input
document.getElementById("todoTitleInput").addEventListener("input", (e) => {
  const input = e.target;
  if (input.value.trim()) {
    input.setCustomValidity(""); // Clear validity when input is valid
  }
});

// Keeps the default/master list selectable in the lists-display sidebar. Necessary as refreshLists function
// iterates through the default list content and therefore does not add the default list itself to the sidebar.
function displayDefaultList() {
  let listsDisplay = document.getElementById("lists-display");

  let defaultListHeader = document.createElement("h2");
  defaultListHeader.textContent = STORAGE.masterList.title;
  defaultListHeader.setAttribute("list-id", STORAGE.masterList.id);

  defaultListHeader.id = "defaultList";

  defaultListHeader.classList.add("list-sidebar-header");

  workingList.id == STORAGE.masterList.id &&
    defaultListHeader.classList.add("selected-list");

  defaultListHeader.onclick = (e) => selectList(e);

  listsDisplay.appendChild(defaultListHeader);
}

function checkTodo(listId, todoId) {
  let complete = STORAGE.toggleTodoFinished(listId, todoId);

  let todoView = document.querySelector(`[data-id="${todoId}"]`);
  todoView.classList.toggle("complete");
}

refreshLists();
displayTodos();
