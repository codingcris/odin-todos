import TodoFormView from "./views/TodoFormView";
import TodoListView from "./views/TodoListView";
import TodoController from "./controllers/TodoController";
import "../css/style.css";
import Storage from "./utils/Storage";

// Main script orchestrates the web app content
(function () {
  let storage = new Storage();

  let body = document.querySelector("body");
  let content = document.createElement("div");
  content.id = "content";

  content.innerHTML = `
    <header id="header">
      <button id="projects-hamburger">Projects</button>
      <h1>Todos App</h1>
    </header>
  `;

  body.appendChild(content);

  let todosSection = document.createElement("div");
  todosSection.id = "todos";

  let userProjects = storage.projects;
  let projectNames = Object.keys(userProjects);
  // a view class which handles the rendering and interactions of form elements for a user's new todo task.
  // receives an array of the current user project/list names for the purpose of choosing a project/list for new todo tasks
  let todoForm = new TodoFormView(projectNames);

  // // a view class which handles the rendering and interactions of the elements in a collection of todo tasks.
  // let todoListView = new TodoListView();

  // todosSection.appendChild(todoForm.form);
  // todosSection.appendChild(todoListView.list);

  // Controller class which handles interactions between different app components
  let todoController = new TodoController(todoForm, todosSection, storage);

  content.appendChild(todosSection);
})();
