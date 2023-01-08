// import UIController from "./uiController";

export default class Navbar {
  static loadAddProject() {
    function createButton(symbol, text) {
      const button = document.createElement("button");
      const span = document.createElement("span");
      span.classList = "material-symbols-outlined";
      span.textContent = symbol;

      const buttonText = document.createTextNode(text);

      button.appendChild(span);
      button.appendChild(buttonText);
      button.id = `form${text}`;

      button.addEventListener("click", (e) => {
        // console.log("test");
        e.preventDefault();
      });

      return button;
    }
    // const addProject = document.querySelector("#projectsAdder");
    // addProject.textContent = "";

    const formDiv = document.createElement("form");
    formDiv.id = "addProjectForm";

    const label = document.createElement("label");
    label.setAttribute("for", "projectName");
    label.innerText = "Name:";

    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("name", "projectName");
    input.setAttribute("id", "projectName");
    input.required = true;
    console.log(input);

    const buttonDiv = document.createElement("div");
    buttonDiv.classList = "buttons";

    buttonDiv.appendChild(createButton("done", "Submit"));
    buttonDiv.appendChild(createButton("cancel", "Cancel"));

    formDiv.appendChild(label);
    formDiv.appendChild(input);
    formDiv.appendChild(buttonDiv);

    // let;
    return formDiv;
  }

  static returnProjectItem(name) {
    const project = document.createElement("div");
    project.textContent = name;
    project.id = "projectItem";
    return project;
  }

  static returnAddProjectBTN() {
    const addProject = document.createElement("div");
    addProject.textContent = "+ Add project";
    addProject.id = "projectAdder";
    // addProject.textContent = "";
    // addProject.addEventListener("click", () => {
    //   addProject.replaceWith(this.loadAddProject());
    //   // UIController.addProjectBTN.formBTNS();
    //   // addProjectDOM();
    // });
    return addProject;
  }
}
