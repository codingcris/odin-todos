export default (function () {
  const defaultList = list("Your Todos");

  function list(title) {
    const content = [];

    function addToList(item) {
      content.push(item);
    }

    function setTitle(newTitle) {
      title = newTitle;
    }

    return { type: "list", title, content, addToList, setTitle };
  }

  function todo(title, description = "", dueDate = null, priority = "regular") {
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

  return { defaultList, list, todo };
})();
