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

  // getProject(name) {
  //   this.projects.forEach((aProject) => {
  //     if (aProject.name === name) {
  //       return aProject;
  //     }
  //   });
  // }

  getAProject(name) {
    // console.log(object);
    // console.log(this.projects[0].getName());
    return this.projects.find((project) => project.getName() === name);
  }

  addProject(project) {
    return this.projects.push(new Project(`${project}`));
  }
}
