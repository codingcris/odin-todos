// View class for a single todo task
export default class TodoView {
  constructor(todo) {
    this._content = document.createElement("div");
    this._content.classList.add("todo");
    this._render(todo);
  }

  _render(todo) {
    let title = document.createElement("h3");
    title.textContent = todo.title;

    let description = document.createElement("p");
    description.textContent = todo.description;

    let project = document.createElement("p");
    project.textContent = "Project: " + todo.project;

    let dueDate = document.createElement("span");
    dueDate.textContent = todo.dueDate;

    switch (todo.priority) {
      case "chill":
        console.log("inside chill case");
        this._content.style.borderLeft = "8px solid #9E9E9E";
        break;
      case "normal":
        this._content.style.borderLeft = "8px solid #4CAF50";
        break;
      case "important":
        this._content.style.borderLeft = "8px solid #F44336";
        break;
    }

    this._content.style.borderRadius = "16px";
    this._content.appendChild(title);
    this._content.appendChild(description);
    this._content.appendChild(project);
    this._content.appendChild(dueDate);
  }
}
