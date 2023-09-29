import Todo from "../models/Todo";
import TodoView from "../views/TodoView";

// Controller class for the different app components
export default class TodoController {
  constructor(todoFormView, todoListView, storage) {
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

    // passes the todos collection to the todoListView for rendering
    this.todoListView = todoListView;
    this.todoListView.todos = this._todos;
    this.todoListView.render();

    this.todoListView.newTodo = () => {
      this.newTodo();
    };
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

    let todoView = new TodoView(newTodo);
    this.todoListView.addTodo(todoView._content);
  }

  newTodo() {
    this.todoFormView.form.reset();
    this.todoFormView.form.style.display = "grid";
  }

  addProject(name) {
    return this.storage.addProject(name);
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
}
