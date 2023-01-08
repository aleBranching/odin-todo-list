import Navbar from "./navbar";
import mainContentUI from "./mainContent";
import aTodoList from "./todoList";
import Task from "./task";

export default class UIController {
  static loadPage() {
    this.addProjectListener();
    this.projectListener();
    this.addTaskListener();
    this.addCurrentProjects();
    this.differentProjectSelected("main");
    // const bodyDiv = document.querySelector("body");
    // bodyDiv.appendChild(this.createHeader());
    // bodyDiv.appendChild(this.createFooter());
    // bodyDiv.appendChild(Navbar.loadNav());
    // bodyDiv.appendChild(mainContent.createMain());
  }

  static currentProjectOBJ = aTodoList.getAProject("main");

  static createHeader() {
    const headerDiv = document.createElement("div");
    headerDiv.classList = "header";
    return headerDiv;
  }

  static createFooter() {
    const footerDiv = document.createElement("div");
    footerDiv.classList = "footer";
    return footerDiv;
  }

  static addProjectFormBTNS() {
    const submitBTN = document.querySelector("#formSubmit");
    const cancelBTN = document.querySelector("#formCancel");
    const inputField = document.querySelector("#projectName");
    const form = document.querySelector("#addProjectForm");
    // console.log(projectListDOMLocation);
    inputField.focus();

    submitBTN.addEventListener("click", (e) => {
      // const lastProjectDOM = projectListDOM[projectListDOM.length - 1];

      e.preventDefault();
      if (
        inputField.value !== "" &&
        aTodoList.getAProject(inputField.value) == null
      ) {
        // console.log(inputField.value);
        inputField.textContent = "";
        form.replaceWith(Navbar.returnAddProjectBTN());
        this.addProjectListener();

        const projectListDOMLocation =
          document.querySelector("div#projectAdder");
        // console.log(projectListDOMLocation);

        const aProjectItem = Navbar.returnProjectItem(inputField.value);
        projectListDOMLocation.before(aProjectItem);

        console.log(aProjectItem);
        // this.projectListener();

        aTodoList.addProject(inputField.value);

        aProjectItem.addEventListener("click", () => {
          // console.log("works");
          this.differentProjectSelected(inputField.value);
        });
      }
    });

    cancelBTN.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("test");

      form.replaceWith(Navbar.returnAddProjectBTN());
      this.addProjectListener();
    });
  }

  static addCurrentProjects() {
    const currentProjects = aTodoList.getProjectsNotMain();
    console.log(currentProjects);

    const projectListDOMLocation = document.querySelector("div#projectAdder");
    // console.log(projectListDOMLocation);

    currentProjects.forEach((aProject) => {
      const aProjectItem = Navbar.returnProjectItem(aProject.getName());
      projectListDOMLocation.before(aProjectItem);
      aProjectItem.addEventListener("click", () => {
        // console.log("works");
        this.differentProjectSelected(aProject.getName());
      });
    });
  }

  static projectListener() {
    // const allProjectsList = document.querySelectorAll("div#projectItem");

    const mainProject = document.querySelector(".primary > div:nth-child(1)");

    mainProject.addEventListener("click", () => {
      console.log(aTodoList.getAProject("main"));
      // this.updateMainDivProject("main");
      this.differentProjectSelected("main");
    });

    // allProjectsList.forEach((aProjectDOM) => {
    //   aProjectDOM.addEventListener("click", () => {
    //     const projectName = aProjectDOM.textContent;
    //     // console.log(projectName);

    //     console.log(aTodoList.getAProject(projectName));
    //   });
    // });
  }

  static addProjectListener() {
    const addProjectDOM = document.querySelector("#projectAdder");
    addProjectDOM.addEventListener("click", () => {
      addProjectDOM.replaceWith(Navbar.loadAddProject());
      this.addProjectFormBTNS();
      // addProjectDOM();
    });
  }

  static taskListener(taskDiv) {
    const deleteButton = taskDiv.querySelector(".delete");
    const editButton = taskDiv.querySelector(".edit");
    const checkbox = taskDiv.querySelector("#finishedTask");
    const currentText2 = taskDiv.querySelector(".noteText").textContent;

    deleteButton.addEventListener("click", () => {
      taskDiv.remove();
      this.currentProjectOBJ.removeTask(currentText2);
    });

    editButton.addEventListener("click", () => {
      const current = taskDiv;
      // console.log(current.querySelector(".noteText"));
      const currentText = taskDiv.querySelector(".noteText").textContent;
      const currentDate = taskDiv.querySelector(`input[type="date"]`).value;
      const editTaskForm = mainContentUI.createTaskForm();

      console.log("current Text", currentText);
      console.log("current Date", currentDate);

      editTaskForm.querySelector("#taskText").value = currentText;
      editTaskForm.querySelector("#taskDate").value = currentDate;

      // editTaskForm.querySelector();

      current.replaceWith(editTaskForm);
      this.editTaskListener(editTaskForm, current);
    });

    checkbox.addEventListener("click", () => {
      taskDiv.classList.toggle("checked");
    });

    // let;
  }

  static logicUpdateATask(currentDOM, newName, newDate) {
    const currentText = currentDOM.querySelector(".noteText").textContent;
    // const currentDate = currentDOM.querySelector(`input[type="date"]`).value;

    const currentTask = this.currentProjectOBJ.getTask(currentText);
    // this.currentProjectOBJ.getTask(currentText)
    currentTask.setName(newName);
    currentTask.setDate(newDate);
  }

  static editTaskListener(editForm, current) {
    const formSubmitBTN = editForm.querySelector("#formSubmit");
    const formCancelBTN = editForm.querySelector("#formCancel");
    const formDateInput = editForm.querySelector("#taskDate");
    // const form = editForm.querySelector(".addTaskForm");

    const formTextInput = editForm.querySelector("#taskText");
    formSubmitBTN.addEventListener("click", (e) => {
      console.log("zzzz");
      e.preventDefault();
      if (formDateInput.value !== "" && formDateInput.value !== "") {
        const date = formDateInput.value;
        const text = formTextInput.value;

        // editForm.replaceWith(mainContentUI.createTask());
        // const addTask = editForm.querySelector(".addTask");
        this.logicUpdateATask(current, text, date);
        const task = mainContentUI.createTask(date, text);
        editForm.replaceWith(task);
        this.taskListener(task);

        this.currentProjectOBJ.getTask();
        // taskBTNS

        // this.addTaskListener();
      }
    });
    console.log(formSubmitBTN);
    formCancelBTN.addEventListener("click", (e) => {
      e.preventDefault();
      editForm.replaceWith(current);
      // this.addTaskListener();
      this.taskListener(current);
    });
  }

  static differentProjectSelected(projectName) {
    // if the task form is active and different project selected
    if (document.querySelector(".addTaskForm")) {
      console.log("exists");
      const theForm = document.querySelector(".addTaskForm");
      console.log(theForm);
      theForm.querySelector("#formCancel").click();
    }
    console.log(aTodoList.getAProject(projectName));
    this.currentProjectOBJ = aTodoList.getAProject(projectName);
    this.updateMainDivProject(projectName);

    // currentProjectOBJ =
  }

  static updateMainDivProject(projectName) {
    const mainDOM = document.querySelector(".main");
    mainDOM.dataset.currentProject = projectName;
    console.log(this.currentProjectOBJ.getTasks());
    const oldTasks = document.querySelectorAll("div.task");
    oldTasks.forEach((aSingularTask) => {
      aSingularTask.remove();
    });

    this.currentProjectOBJ.getTasks().forEach((aTask) => {
      // oldTasks.remove();
      console.log("A task", aTask);
      const addTask = document.querySelector(".addTask");
      const task = mainContentUI.createTask(aTask.getDate(), aTask.getName());

      this.taskListener(task);
      addTask.before(task);

      this.addTaskListener();
    });
  }

  static addCurrentTasks() {}

  static formTaskListener() {
    const formSubmitBTN = document.querySelector("#formSubmit");
    const formCancelBTN = document.querySelector("#formCancel");
    const formDateInput = document.querySelector("#taskDate");
    const form = document.querySelector(".addTaskForm");

    const formTextInput = document.querySelector("#taskText");
    formSubmitBTN.addEventListener("click", (e) => {
      console.log("zzzz");
      e.preventDefault();
      if (formDateInput.value !== "" && formDateInput.value !== "") {
        const date = formDateInput.value;
        const text = formTextInput.value;

        form.replaceWith(mainContentUI.createAddTask());
        const addTask = document.querySelector(".addTask");
        const task = mainContentUI.createTask(date, text);

        this.taskListener(task);
        addTask.before(task);

        this.addTaskListener();

        this.currentProjectOBJ.addTask(new Task(text, date));
      }
    });
    console.log(formSubmitBTN);
    formCancelBTN.addEventListener("click", (e) => {
      e.preventDefault();
      form.replaceWith(mainContentUI.createAddTask());
      this.addTaskListener();
    });
  }

  static addTaskListener() {
    const addTaskDOM = document.querySelector(".addTask");
    addTaskDOM.addEventListener("click", (e) => {
      e.preventDefault();
      if (document.querySelector(".addTaskForm") == null) {
        const taskFormDOM = mainContentUI.createTaskForm();
        const dateINPT = taskFormDOM.querySelector("input#taskDate");
        dateINPT.focus();
        addTaskDOM.replaceWith(taskFormDOM);
        // this.addTaskListener();
        this.formTaskListener();
      }
    });
  }
}
