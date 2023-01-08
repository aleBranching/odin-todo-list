import Project from "./project";
import Task from "./task";

class TodoList {
  constructor() {
    this.projects = [];
    this.projects.push(new Project("main"));
  }

  getProjects() {
    return this.projects;
  }

  getProjectsNotMain() {
    return this.projects.filter((aProject) => aProject.getName() !== "main");
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

const aTodoList = new TodoList();
aTodoList.addProject("test");
aTodoList
  .getAProject("test")
  .addTask(new Task("Do homework", "2023-01-19", "test"));
aTodoList
  .getAProject("test")
  .addTask(new Task("todays task 1", "2023-01-08", "test"));
aTodoList
  .getAProject("test")
  .addTask(new Task("todays task 2", "2023-01-08", "test"));

aTodoList
  .getAProject("main")
  .addTask(new Task("get rizz", "2023-01-19", "main"));
aTodoList
  .getAProject("main")
  .addTask(new Task("Go rock climbing", "2024-02-21", "main"));
aTodoList
  .getAProject("main")
  .addTask(new Task("read a book", "2023-01-12", "main"));

export default aTodoList;
