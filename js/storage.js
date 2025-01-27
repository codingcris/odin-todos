import TODOS from "./todos.js";

export default (function () {
  // loads master List of all todos and todo sublists if available in local storage or creates a new master list
  // and saves it to local storage. The masterList object is a representation of the masterList in local storage.
  // the application will work with the masterList object and update the local storage representation to keep storage updated.
  let masterList = JSON.parse(localStorage.getItem("masterList"));

  if (!masterList) {
    localStorage.setItem("masterList", JSON.stringify(TODOS.defaultList));
    masterList = JSON.parse(localStorage.getItem("masterList"));
  }

  // adds a new item (todo or sublist) to the master list and updates local storage
  function addToMasterList(itemId, item) {
    masterList[itemId] = item;
    updateMasterList();
  }

  // removes an item with the given itemId from the master list
  function removeFromMasterList(itemId) {
    delete masterList[itemId];
    updateMasterList();
  }

  // updates the masterList in localStorage.
  function updateMasterList() {
    localStorage.setItem("masterList", JSON.stringify(masterList));
  }

  // creates a new todo sublist and adds it to the master list.
  function newList(title) {
    let list = TODOS.list(title);
    addToMasterList(list.id, list);
  }

  // creates a new todo and adds it to the master list
  function newTodo(
    title,
    description,
    listId,
    dueDate = null,
    priority = "regular",
  ) {
    let todo = TODOS.todo(title, listId, description, dueDate, priority);

    // new todos without a list id are added directly into the master list. If listId is provided, the todo
    // is added to the masterList under the given sublist.
    if (listId === masterList.id) {
      addToMasterList(todo.id, todo);
    } else {
      masterList[listId].content.push(todo);
      updateMasterList();
    }
  }

  // selects and returns the todo specified by the todoId. With the listId, the todo is found within a sublist.
  function selectTodo(listId, todoId) {
    let todo;
    if (listId === masterList.id) {
      todo = masterList[todoId];
    } else {
      let list = masterList[listId];
      for (let item of list.content) {
        if (item.id === todoId) todo = item;
      }
    }

    return todo;
  }

  // toggles the complete field of a todo between true or false. Updates the masterList to reflect this new state.
  function toggleTodoFinished(listId, todoId) {
    let todo = selectTodo(listId, todoId);
    todo.complete = !todo.complete;
    updateMasterList();
    return todo.complete;
  }

  return {
    masterList,
    addToMasterList,
    removeFromMasterList,
    newList,
    newTodo,
    toggleTodoFinished,
  };
})();
