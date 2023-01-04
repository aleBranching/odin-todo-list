import Project from "./project";
import Task from "./task";

export default class TodoList {
  constructor() {
    this.projects = [];
    this.projects.push(new Project("main"));
  }

  getProjects() {
    return this.projects;
  }

  addProject(project) {
    this.projects.push(new Project(`${project}`));
  }
}
