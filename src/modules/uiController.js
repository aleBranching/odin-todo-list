import Navbar from "./navbar";
import mainContentUI from "./mainContent";

export default class UIController {
  static loadPage() {
    this.addProjectListener();
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

  static addProjectListener() {
    const addProjectDOM = document.querySelector("#projectAdder");
    addProjectDOM.addEventListener("click", () => {
      addProjectDOM.replaceWith(Navbar.loadAddProject());
      this.formBTNS();
      // addProjectDOM();
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
        addTask.before(mainContentUI.createTask(date, text));

        this.addTaskListener();
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
      addTaskDOM.replaceWith(mainContentUI.createTaskForm());
      this.formTaskListener();
    });
  }
}
