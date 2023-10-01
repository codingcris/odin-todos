//  View class for the todo task form
export default class TodoFormView {
  constructor(projectLists) {
    this._form = document.createElement("form");
    this._form.style.display = "none";
    this._form.id = "todo-form";

    this._form.innerHTML = `
<label id="todo-title">
    Title:
    <input type="text" id="title-input" required/>
</label>
<label id="todo-description">
    Description:
    <textarea id="description-input"> </textarea>
</label>
<label>
    Due Date:
    <input type="date" id="due-date"/>
</label>
<fieldset id="todo-priority">
    <legend>Priority</legend>
    <label>
        <input name="priority" value="chill" type="radio">
        Chill
    </label>
    <label>
        <input name="priority" value="normal" type="radio" checked>
        Normal
    </label>
    <label>
        <input name="priority" value="important" type="radio">
        Important
    </label>
</fieldset>`;

    this.setupTimeInput();

    this.userProjects = projectLists;
    this.setupProjectsDropDown();

    let buttons = document.createElement("div");

    let submit = document.createElement("button");
    submit.id = "submit-todo-bttn";
    submit.textContent = "Add";

    let reset = document.createElement("button");
    reset.id = "reset-todo-bttn";
    reset.textContent = "Clear";
    reset.type = "reset";

    let cancel = document.createElement("button");
    cancel.id = "cancel-todo-bttn";
    cancel.textContent = "Cancel";
    cancel.type = "button";
    cancel.addEventListener("click", (e) => {
      this.form.reset();
      this.form.style.display = "none";
    });

    buttons.appendChild(submit);
    buttons.appendChild(reset);
    buttons.appendChild(cancel);

    this.form.appendChild(buttons);

    this.form.addEventListener("submit", (e) => {
      const titleInput = document.getElementById("title-input");
      const descriptionInput = document.getElementById("description-input");
      const dueDateInput = document.getElementById("due-date");

      e.preventDefault();

      let todoData = {
        title: titleInput.value,
        description: descriptionInput.value,
        dueDate: dueDateInput.value,
        priority: document.querySelector("input[name=priority]:checked").value,
        project: document.querySelector("#todo-project-input").value,
      };

      this.onAddTodo(todoData);

      this.form.reset();
    });
  }

  get form() {
    return this._form;
  }

  onAddTodo(data) {
    // placeholder function to be overriden by controller class, a simple form of event handling
  }

  cleanUp() {
    let addTimeBttn = document.querySelector("#add-time-bttn");
    addTimeBttn.style.display = "block";

    let timeInput = document.querySelector("#todo-time");
    timeInput.style.display = "none";

    this.form.style.display = "none";
  }

  setupTimeInput() {
    let addTimeBttn = document.createElement("button");
    addTimeBttn.id = "add-time-bttn";
    addTimeBttn.setAttribute("type", "button");
    addTimeBttn.textContent = "Add Time";

    let timeInput = document.createElement("input");
    timeInput.setAttribute("type", "time");
    timeInput.id = "time";

    let timeLabel = document.createElement("label");
    timeLabel.id = "todo-time";
    timeLabel.style.display = "none";
    timeLabel.textContent = "Due Time:";
    timeLabel.appendChild(timeInput);

    this.form.appendChild(addTimeBttn);
    this.form.appendChild(timeLabel);

    addTimeBttn.addEventListener("click", (e) => {
      timeLabel.style.display = "inline-block";
      addTimeBttn.style.display = "none";
    });
  }

  addProject(projectName) {
    // placeholder function to be overwritten by the controller class
  }

  setupProjectsDropDown() {
    let label = document.createElement("label");
    label.textContent = "Project: ";
    label.id = "todo-project";
    label.width = "100%";

    let selection = document.createElement("select");
    selection.id = "todo-project-input";
    selection.setAttribute("name", "project");
    selection.innerHTML = `
      <option value="defaultTodoStorage">None</option>
      <option>Add New Project</option>
    `;

    label.appendChild(selection);
    this.form.appendChild(label);

    for (let project of this.userProjects) {
      if (project != "defaultTodoStorage") {
        let newOption = document.createElement("option");
        newOption.textContent = project;

        selection.appendChild(newOption);
      }
    }

    selection.addEventListener("change", (e) => {
      let projectName;
      if (e.target.value === "Add New Project") {
        projectName = prompt("New Project/List name:");

        if (projectName) {
          let added = this.addProject(projectName);
          if (added) {
            let newOption = document.createElement("option");
            newOption.textContent = projectName;
            newOption.setAttribute("value", projectName);

            selection.appendChild(newOption);
            newOption.setAttribute("selected", "selected");
          } else {
            let options = document.querySelectorAll(
              "#todo-project-input > option"
            );
            for (let option of options) {
              if (option.value === projectName) {
                option.selected = true;
                return;
              }
            }
            document.querySelector(
              "#todo-project-input > option:first-child"
            ).selected = true;
          }
        }
      }
    });
  }
}
