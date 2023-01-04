import Task from "./task";

const today = new Date();

export default class Car {
  constructor() {
    this.make = [];
    this.single = new Task("test", "ts", today.getDate(), "high", "tes");
  }
}
