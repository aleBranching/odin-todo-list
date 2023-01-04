export default class Task {
  constructor(name, date, priority) {
    this.name = name;
    this.date = date;
    this.priority = priority;
  }

  setDate(date) {
    this.date = date;
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

  setPriority(priority) {
    this.priority = priority;
  }

  getPriority() {
    return this.priority;
  }
}
