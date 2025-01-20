import TODOS from "./todos.js";

export default (function () {
  let masterList = JSON.parse(localStorage.getItem("masterList"));

  if (!masterList) {
    localStorage.setItem("masterList", JSON.stringify(TODOS.defaultList));
    masterList = JSON.parse(localStorage.getItem("masterList"));
  }

  function addToMasterList(itemId, item) {
    masterList[itemId] = item;
    updateMasterList();
  }

  function removeFromMasterList(itemId) {
    delete masterList[itemId];
    updateMasterList();
  }

  function updateMasterList() {
    localStorage.setItem("masterList", JSON.stringify(masterList));
  }

  function newList(title) {
    let list = TODOS.list(title);
    addToMasterList(list.id, list);
  }

  function newTodo(title, description, listId) {
    let todo = TODOS.todo(title, listId, description);
    if (listId === masterList.id) {
      addToMasterList(todo.id, todo);
    } else {
      masterList[listId].content.push(todo);
      updateMasterList();
    }
  }

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

  function toggleTodoFinished(listId, todoId) {
    let todo = selectTodo(listId, todoId);
    todo.complete = !todo.complete;
    updateMasterList();
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
