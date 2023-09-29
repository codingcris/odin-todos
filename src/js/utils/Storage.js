export default class Storage {
  constructor() {
    let projects = localStorage.getItem("projects");
    if (!projects) {
      let defaultProjects = { defaultTodoStorage: [] };
      localStorage.setItem("projects", JSON.stringify(defaultProjects));
    }
  }

  get projects() {
    return JSON.parse(localStorage.getItem("projects"));
  }

  addProject(projectName) {
    if (!this.projects.hasOwnProperty(projectName)) {
      let projects = this.projects;
      projects[projectName] = [];
      localStorage.setItem("projects", JSON.stringify(projects));
      return true;
    } else {
      return false;
    }
  }

  addTodo(todo) {
    let projectName = todo.project;

    let projectTasks = this.projects[projectName];
    projectTasks.push(todo);

    let newTasks = {};
    newTasks[projectName] = projectTasks;

    localStorage.setItem(
      "projects",
      JSON.stringify({ ...this.projects, ...newTasks })
    );
  }
}
