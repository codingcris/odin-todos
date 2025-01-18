export default (function () {
  // the master list containing all todo sublists and individual todos. Titled "All Todos" by default
  const defaultList = list("All Todos");
  // list factory function returns a new todo list
  function list(title) {
    const id = crypto.randomUUID();
    const content = [];

    function addToList(item) {
      content.push(item);
    }

    function setTitle(newTitle) {
      title = newTitle;
    }

    return { id, type: "list", title, content, addToList, setTitle };
  }
  // todo factory function returns a new todo
  function todo(title, description = "", dueDate = null, priority = "regular") {
    const id = crypto.randomUUID();

    function setTitle(newTitle) {
      title = newTitle;
    }

    function setDescription(newDescription) {
      description = newDescription;
    }

    function setDueDate(newDueDate) {
      dueDate = newDueDate;
    }

    function setPriority(newPriority) {
      priority = newPriority;
    }

    return {
      id,
      type: "todo",
      title,
      description,
      dueDate,
      priority,
      setTitle,
      setDescription,
      setDueDate,
      setPriority,
    };
  }

  // searches the default list for the sublist with the given id. If the id matches the default list id, returns the default list
  function findList(id) {
    if (id === defaultList.id) {
      return defaultList;
    } else {
      for (let i of defaultList.content) {
        if (i.id === id && i.type === "list") {
          return i;
        }
      }
    }
  }
  return { defaultList, list, todo, findList };
})();
