export default class Task {
  constructor(name, date) {
    this.name = name;
    this.date = date;
    // this.priority = priority;
    this.done = false;
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
