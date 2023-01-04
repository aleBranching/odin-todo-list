import TaskHolder from "./modules/tasksHolder";

// console.log(main

// const projects = console.log(projects);

class ProjectHandler {
  constructor() {
    this.projects = { main: new TaskHolder("main") };
    this.projects.main.createTask("ts", "gaa", "01", "high");
  }

  createTask(project, title, description, dueDate, priority) {
    if (project || title || dueDate || priority !== null) {
      this.projects.project.createTask(title, description, dueDate, priority);
    } else {
      throw console.error("not defined");
    }
  }

  // returnProjectTasks(projez) {
  //   this.projects.projez.createTask();
  // }
}

const projectHandler = new ProjectHandler();

projectHandler.createTask("2", "a", "af", "2", "high");

// console.log(projectHandler.returnProjectTasks("main"));
