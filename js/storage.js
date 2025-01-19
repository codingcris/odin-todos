import TODOS from "./todos.js";

export default (function () {
  localStorage.clear();
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
    localStorage.setItem("masterList", masterList);
  }

  function newList(title) {
    let list = TODOS.list(title);
    addToMasterList(list.id, list);
  }

  function newTodo(title, description, listId) {
    let todo = TODOS.todo(title, description);
    if (listId === masterList.id) {
      addToMasterList(todo.id, todo);
    } else {
      masterList[listId].content.push(todo);
      updateMasterList();
    }
  }

  return {
    masterList,
    addToMasterList,
    removeFromMasterList,
    newList,
    newTodo,
  };
})();
