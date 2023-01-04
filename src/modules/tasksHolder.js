import Task from "./task";

const today = new Date();

export default class TaskHolder {
  constructor() {
    this.taskList = [];
  }

  createTask() {
    this.taskList.push(new Task("test", null, today.getDate(), "high", "main"));
  }

  get tasks() {
    return this.taskList;
  }
}
