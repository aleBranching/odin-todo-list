export default class Task {
  constructor(name, date, project) {
    this.name = name;
    this.date = date;
    // this.priority = priority;
    this.done = false;
    this.project = project;
  }

  setDate(date) {
    this.date = date;
  }

  toggleDone() {
    this.done = !this.done;
  }

  getDate() {
    return this.date;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  // setPriority(priority) {
  //   this.priority = priority;
  // }

  // getPriority() {
  //   return this.priority;
  // }
}
