export default class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getTasks() {
    return this.tasks;
  }

  getTask(taskName) {
    this.tasks.find((task) => task.getName() === taskName);
  }

  addTask(task) {
    this.tasks.push(task);
  }
}
