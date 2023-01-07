import UIController from "./modules/uiController";
import TodoList from "./modules/todoList";

const aTodoList = new TodoList();

console.log(aTodoList.projects);

console.log(aTodoList.getAProject("main"));

UIController.loadPage();
