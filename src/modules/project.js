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
    return this.tasks.find((task) => task.getName() === taskName);
  }

  removeTask(taskName) {
    this.tasks = this.tasks.filter((task) => task.getName() !== taskName);
    return this.tasks;
  }

  addTask(task) {
    return this.tasks.push(task);
  }
}
