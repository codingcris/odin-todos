import TodoView from "./TodoView";

// view class for a todo task list
export default class TodoListView {
  constructor(listTitle, todos) {
    this._content = document.createElement("div");
    this._todos = todos;

    let projectTitle = document.createElement("h2");
    projectTitle.textContent = listTitle;
    this._content.appendChild(projectTitle);

    let newTodoBttn = document.createElement("button");
    newTodoBttn.setAttribute("type", "button");
    newTodoBttn.textContent = "New Task";
    newTodoBttn.id = "new-task-bttn";
    this._content.appendChild(newTodoBttn);

    newTodoBttn.addEventListener("click", (e) => {
      this.newTodo();
    });

    this._list = document.createElement("ul");
    this.render();
    this._content.appendChild(this._list);

    document.querySelectorAll("ul li").forEach(function (li) {});
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
    let li = document.createElement("li");

    let checkButton = document.createElement("button");
    checkButton.className = "bullet-button";
    li.appendChild(checkButton);

    let todoView = new TodoView(todo);
    li.appendChild(todoView._content);
    this._list.appendChild(li);
  }

  render() {
    for (let todo of this._todos) {
      this.addTodo(todo);
    }
  }

  get list() {
    return this._content;
  }
}
