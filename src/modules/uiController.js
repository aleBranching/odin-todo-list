import Navbar from "./navbar";
import mainContentUI from "./mainContent";

export default class UIController {
  static loadPage() {
    this.addProjectListener();
    this.projectListener();
    this.addTaskListener();
    // const bodyDiv = document.querySelector("body");
    // bodyDiv.appendChild(this.createHeader());
    // bodyDiv.appendChild(this.createFooter());
    // bodyDiv.appendChild(Navbar.loadNav());
    // bodyDiv.appendChild(mainContent.createMain());
  }

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

  static formBTNS() {
    const submitBTN = document.querySelector("#formSubmit");
    const cancelBTN = document.querySelector("#formCancel");
    const inputField = document.querySelector("#projectName");
    const form = document.querySelector("#addProjectForm");
    // console.log(projectListDOMLocation);
    inputField.focus();

    submitBTN.addEventListener("click", (e) => {
      // const lastProjectDOM = projectListDOM[projectListDOM.length - 1];

      e.preventDefault();
      if (inputField.value !== "") {
        console.log(inputField.value);
        inputField.textContent = "";
        form.replaceWith(Navbar.returnAddProjectBTN());
        this.addProjectListener();

        const projectListDOMLocation =
          document.querySelector("div#projectAdder");
        console.log(projectListDOMLocation);
        projectListDOMLocation.before(
          Navbar.returnProjectItem(inputField.value)
        );
      }
    });

    cancelBTN.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("test");

      form.replaceWith(Navbar.returnAddProjectBTN());
      this.addProjectListener();
    });
  }

  static projectListener() {
    const allProjectsList = document.querySelectorAll("div#projectItem");

    allProjectsList.forEach((aProjectDOM) => {
      aProjectDOM.addEventListener("click", () => {
        const projectName = aProjectDOM.textContent;

        console.log(projectName);
      });
    });
  }

  static addProjectListener() {
    const addProjectDOM = document.querySelector("#projectAdder");
    addProjectDOM.addEventListener("click", () => {
      addProjectDOM.replaceWith(Navbar.loadAddProject());
      this.formBTNS();
      // addProjectDOM();
    });
  }

  static taskListener(taskDiv) {
    const deleteButton = taskDiv.querySelector(".delete");
    const editButton = taskDiv.querySelector(".edit");
    const checkbox = taskDiv.querySelector("#finishedTask");

    deleteButton.addEventListener("click", () => {
      taskDiv.remove();
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
        const task = mainContentUI.createTask(date, text);
        editForm.replaceWith(task);
        this.taskListener(task);

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

        // taskBTNS

        this.addTaskListener();
        this.projectListener();
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
