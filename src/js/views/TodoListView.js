import TodoView from "./TodoView";

// view class for a todo task list
export default class TodoListView {
  constructor(listTitle) {
    this._content = document.createElement("div");
    this._todos = {};

    let newTodoBttn = document.createElement("button");
    newTodoBttn.setAttribute("type", "button");
    newTodoBttn.textContent = "New Task";
    newTodoBttn.id = "new-task-bttn";
    this._content.appendChild(newTodoBttn);

    let sectionHeader = document.createElement("h1");
    sectionHeader.textContent = "ToDos";
    this._content.appendChild(sectionHeader);
    sectionHeader.style.width = "100%";
    sectionHeader.style.textAlign = "center";

    newTodoBttn.addEventListener("click", (e) => {
      this.newTodo();
    });
  }

  get todos() {
    return this._todos;
  }

  set todos(todos) {
    this._todos = todos;
  }

  newTodo() {
    // filler class to be overwritten by the controller class
  }

  // adds a new todo task for rendering.
  addTodo(todo) {
    this.render();
  }

  render() {
    this._content;
    for (let project in this._todos) {
      let projectTitle = document.createElement("h2");
      projectTitle.textContent = project;
      this._content.appendChild(projectTitle);

      let projectTasks = document.createElement("ul");
      projectTasks.id = project + "-tasks";

      for (let task of this._todos[project]) {
        console.log(task);
        let li = document.createElement("li");

        let todoView = new TodoView(task);
        li.appendChild(todoView._content);

        projectTasks.appendChild(li);
      }

      this._content.appendChild(projectTasks);
    }
  }

  get list() {
    return this._content;
  }
}
