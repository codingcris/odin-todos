import Todo from "../models/Todo";
import TodoView from "../views/TodoView";
import TodoListView from "../views/TodoListView";

// Controller class for the different app components
export default class TodoController {
  constructor(todoFormView, todosSection, storage) {
    this.storage = storage;
    // a collection of todo tasks
    this._todos;
    this.loadTodos();

    this.todoFormView = todoFormView;
    // overwrites the form view onAddTodo method to point to the controller's addTodo method
    todoFormView.onAddTodo = (data) => {
      this.addTodo(data);
      todoFormView.cleanUp();
    };

    todoFormView.addProject = (projectName) => {
      return this.addProject(projectName);
    };
    todosSection.appendChild(todoFormView.form);

    this._listViews = {};
    this._loadListViews();

    this.todosListViewsSection = document.createElement("div");

    for (let project in this._listViews) {
      this.todosListViewsSection.appendChild(this._listViews[project]._content);
    }

    todosSection.appendChild(this.todosListViewsSection);
  }

  // takes the data for a new todo task and adds it to our this._todos collection
  addTodo(data) {
    let newTodo = new Todo(
      data.title,
      data.description,
      data.dueDate,
      data.priority,
      data.project
    );

    this.storage.addTodo(newTodo);

    let todoListView = this._listViews[data.project];
    this._listViews[data.project] = todoListView;
    todoListView.addTodo(newTodo);
  }

  newTodo() {
    this.todoFormView.form.reset();
    this.todoFormView.form.style.display = "grid";
  }

  addProject(name) {
    if (this.storage.addProject(name)) {
      let newTodoListView = new TodoListView(name, []);
      this._listViews[name] = newTodoListView;
      this.todosListViewsSection.appendChild(newTodoListView._content);
      return true;
    } else {
      return false;
    }
  }

  loadTodos() {
    let projects = this.storage.projects;
    for (let project in projects) {
      let todos = projects[project];

      todos = todos.map((todo) => {
        return new Todo(
          todo._title,
          todo._description,
          todo._dueDate,
          todo._priority,
          todo._project
        );
      });

      projects[project] = todos;
    }

    this._todos = projects;
  }

  _loadListViews() {
    let temp = Object.entries(this._todos).map(([project, todos]) => {
      let listView = new TodoListView(project, todos);

      listView.newTodo = () => this.newTodo();

      return [project, listView];
    });

    this._listViews = Object.fromEntries(temp);
  }
}
