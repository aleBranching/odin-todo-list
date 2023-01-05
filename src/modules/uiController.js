import Navbar from "./navbar";
import mainContentUI from "./mainContent";

export default class UIController {
  static loadPage() {
    this.addProjectListener();
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

    submitBTN.addEventListener("click", (e) => {
      e.preventDefault();
      // console.log(inp);
      if (inputField.value !== "") {
        console.log(inputField.value);
        inputField.textContent = "";
        form.replaceWith(Navbar.returnAddProjectBTN());
        this.addProjectListener();
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

  static addTaskListener() {
    document.querySelector(".addTask");
  }
}
