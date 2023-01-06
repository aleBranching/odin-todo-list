import { formatRelative } from "date-fns";

export default class mainContentUI {
  static createTask(dateTxt, text) {
    const taskDiv = document.createElement("div");
    taskDiv.classList = "task";

    const taskInfoDiv = document.createElement("div");
    taskInfoDiv.classList = "taskInfo";

    const checkBoxInpt = document.createElement("input");
    checkBoxInpt.setAttribute("type", "checkbox");
    checkBoxInpt.setAttribute("name", "finishedTask");
    checkBoxInpt.setAttribute("id", "finishedTask");

    const dateInpt = document.createElement("input");
    dateInpt.setAttribute("type", "date");
    dateInpt.value = dateTxt;

    const textNode = document.createElement("div");
    textNode.classList = "noteText";
    textNode.textContent = text;

    taskInfoDiv.appendChild(checkBoxInpt);
    taskInfoDiv.appendChild(dateInpt);
    taskInfoDiv.appendChild(textNode);

    taskDiv.appendChild(taskInfoDiv);

    const functionDiv = document.createElement("div");
    functionDiv.classList = "functions";

    const spanEdit = document.createElement("span");
    spanEdit.classList = "material-symbols-outlined edit";
    spanEdit.textContent = "edit";
    const spanDelete = document.createElement("span");
    spanDelete.textContent = "delete";
    spanDelete.classList = "material-symbols-outlined delete";

    functionDiv.appendChild(spanEdit);
    functionDiv.appendChild(spanDelete);
    taskDiv.appendChild(functionDiv);

    return taskDiv;
  }

  static createAddTask() {
    const addTaskDiv = document.createElement("div");
    addTaskDiv.classList = "addTask";
    addTaskDiv.textContent = "+ Add Task";
    return addTaskDiv;
  }

  static createTaskForm() {
    // Cheating? yes. Tired? yes.
    const addTaskForm = document.createElement("div");
    addTaskForm.classList = "addTaskForm";

    const allHTML = `
    <form action="">
      <div>
        <label for="date">Date:</label>
        <input type="date" name="taskDate" id="taskDate" />
        <label for="Task">Task:</label>
        <input type="text" name="taskText" id="taskText" />
      </div>
      <div class="taskFormButtons">
        <button id="formSubmit">
          <span class="material-symbols-outlined">done</span>Submit
        </button>
        <button id="formCancel">
          <span class="material-symbols-outlined">cancel</span>Cancel
        </button>
      </div>
    </form>
  `;

    addTaskForm.innerHTML = allHTML;

    const submitBTN = addTaskForm.querySelector("#formSubmit");
    const cancelBTN = addTaskForm.querySelector("#formCancel");

    submitBTN.addEventListener("click", (e) => {
      e.preventDefault();
    });

    cancelBTN.addEventListener("click", (e) => {
      e.preventDefault();
    });
    return addTaskForm;
  }
}
