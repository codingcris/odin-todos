export default (function () {
  const defaultList = list("All Todos");

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
