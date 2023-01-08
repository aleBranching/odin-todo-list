(()=>{"use strict";class e{static loadAddProject(){function e(e,t){const r=document.createElement("button"),n=document.createElement("span");n.classList="material-symbols-outlined",n.textContent=e;const c=document.createTextNode(t);return r.appendChild(n),r.appendChild(c),r.id=`form${t}`,r.addEventListener("click",(e=>{e.preventDefault()})),r}const t=document.createElement("form");t.id="addProjectForm";const r=document.createElement("label");r.setAttribute("for","projectName"),r.innerText="Name:";const n=document.createElement("input");n.setAttribute("type","text"),n.setAttribute("name","projectName"),n.setAttribute("id","projectName"),n.required=!0,console.log(n);const c=document.createElement("div");return c.classList="buttons",c.appendChild(e("done","Submit")),c.appendChild(e("cancel","Cancel")),t.appendChild(r),t.appendChild(n),t.appendChild(c),t}static returnProjectItem(e){const t=document.createElement("div");return t.textContent=e,t.id="projectItem",t}static returnAddProjectBTN(){const e=document.createElement("div");return e.textContent="+ Add project",e.id="projectAdder",e}}class t{static createTask(e,t){const r=document.createElement("div");r.classList="task";const n=document.createElement("div");n.classList="taskInfo";const c=document.createElement("input");c.setAttribute("type","checkbox"),c.setAttribute("name","finishedTask"),c.setAttribute("id","finishedTask");const s=document.createElement("input");s.setAttribute("type","date"),s.value=e,s.readOnly=!0;const a=document.createElement("div");a.classList="noteText",a.textContent=t,n.appendChild(c),n.appendChild(s),n.appendChild(a),r.appendChild(n);const o=document.createElement("div");o.classList="functions";const d=document.createElement("span");d.classList="material-symbols-outlined edit",d.textContent="edit";const i=document.createElement("span");return i.textContent="delete",i.classList="material-symbols-outlined delete",o.appendChild(d),o.appendChild(i),r.appendChild(o),r}static createAddTask(){const e=document.createElement("div");return e.classList="addTask",e.textContent="+ Add Task",e}static createTaskForm(){const e=document.createElement("div");e.classList="addTaskForm",e.innerHTML='\n    <form action="">\n      <div>\n        <label for="date">Date:</label>\n        <input type="date" name="taskDate" id="taskDate" />\n        <label for="Task">Task:</label>\n        <input type="text" name="taskText" id="taskText" />\n      </div>\n      <div class="taskFormButtons">\n        <button id="formSubmit">\n          <span class="material-symbols-outlined">done</span>Submit\n        </button>\n        <button id="formCancel">\n          <span class="material-symbols-outlined">cancel</span>Cancel\n        </button>\n      </div>\n    </form>\n  ';const t=e.querySelector("#formSubmit"),r=e.querySelector("#formCancel");return t.addEventListener("click",(e=>{e.preventDefault()})),r.addEventListener("click",(e=>{e.preventDefault()})),e}}class r{constructor(e){this.name=e,this.tasks=[]}setName(e){this.name=e}getName(){return this.name}getTasks(){return this.tasks}getTask(e){return this.tasks.find((t=>t.getName()===e))}addTask(e){return this.tasks.push(e)}}const n=new class{constructor(){this.projects=[],this.projects.push(new r("main"))}getProjects(){return this.projects}getAProject(e){return this.projects.find((t=>t.getName()===e))}addProject(e){return this.projects.push(new r(`${e}`))}};class c{constructor(e,t){this.name=e,this.date=t,this.done=!1}setDate(e){this.date=e}getDate(){return this.date}setName(e){this.name=e}getName(){return this.name}}class s{static loadPage(){this.addProjectListener(),this.projectListener(),this.addTaskListener()}static currentProjectOBJ=n.getAProject("main");static createHeader(){const e=document.createElement("div");return e.classList="header",e}static createFooter(){const e=document.createElement("div");return e.classList="footer",e}static addProjectFormBTNS(){const t=document.querySelector("#formSubmit"),r=document.querySelector("#formCancel"),c=document.querySelector("#projectName"),s=document.querySelector("#addProjectForm");c.focus(),t.addEventListener("click",(t=>{if(t.preventDefault(),""!==c.value&&null==n.getAProject(c.value)){c.textContent="",s.replaceWith(e.returnAddProjectBTN()),this.addProjectListener();const t=document.querySelector("div#projectAdder"),r=e.returnProjectItem(c.value);t.before(r),console.log(r),n.addProject(c.value),r.addEventListener("click",(()=>{this.differentProjectSelected(c.value)}))}})),r.addEventListener("click",(t=>{t.preventDefault(),console.log("test"),s.replaceWith(e.returnAddProjectBTN()),this.addProjectListener()}))}static projectListener(){document.querySelector(".primary > div:nth-child(1)").addEventListener("click",(()=>{console.log(n.getAProject("main")),this.differentProjectSelected("main")}))}static addProjectListener(){const t=document.querySelector("#projectAdder");t.addEventListener("click",(()=>{t.replaceWith(e.loadAddProject()),this.addProjectFormBTNS()}))}static taskListener(e){const r=e.querySelector(".delete"),n=e.querySelector(".edit"),c=e.querySelector("#finishedTask");r.addEventListener("click",(()=>{e.remove()})),n.addEventListener("click",(()=>{const r=e,n=e.querySelector(".noteText").textContent,c=e.querySelector('input[type="date"]').value,s=t.createTaskForm();console.log("current Text",n),console.log("current Date",c),s.querySelector("#taskText").value=n,s.querySelector("#taskDate").value=c,r.replaceWith(s),this.editTaskListener(s,r)})),c.addEventListener("click",(()=>{e.classList.toggle("checked")}))}static editTaskListener(e,r){const n=e.querySelector("#formSubmit"),c=e.querySelector("#formCancel"),s=e.querySelector("#taskDate"),a=e.querySelector("#taskText");n.addEventListener("click",(r=>{if(console.log("zzzz"),r.preventDefault(),""!==s.value&&""!==s.value){const r=s.value,n=a.value,c=t.createTask(r,n);e.replaceWith(c),this.taskListener(c)}})),console.log(n),c.addEventListener("click",(t=>{t.preventDefault(),e.replaceWith(r),this.taskListener(r)}))}static differentProjectSelected(e){console.log(n.getAProject(e)),this.currentProjectOBJ=n.getAProject(e),this.updateMainDivProject(e)}static updateMainDivProject(e){document.querySelector(".main").dataset.currentProject=e,console.log(this.currentProjectOBJ.getTasks()),document.querySelectorAll("div.task").forEach((e=>{e.remove()})),this.currentProjectOBJ.getTasks().forEach((e=>{console.log("A task",e);const r=document.querySelector(".addTask"),n=t.createTask(e.getName(),e.getDate());this.taskListener(n),r.before(n),this.addTaskListener()}))}static addCurrentTasks(){}static formTaskListener(){const e=document.querySelector("#formSubmit"),r=document.querySelector("#formCancel"),n=document.querySelector("#taskDate"),s=document.querySelector(".addTaskForm"),a=document.querySelector("#taskText");e.addEventListener("click",(e=>{if(console.log("zzzz"),e.preventDefault(),""!==n.value&&""!==n.value){const e=n.value,r=a.value;s.replaceWith(t.createAddTask());const o=document.querySelector(".addTask"),d=t.createTask(e,r);this.taskListener(d),o.before(d),this.addTaskListener(),this.currentProjectOBJ.addTask(new c(e,r))}})),console.log(e),r.addEventListener("click",(e=>{e.preventDefault(),s.replaceWith(t.createAddTask()),this.addTaskListener()}))}static addTaskListener(){const e=document.querySelector(".addTask");e.addEventListener("click",(r=>{if(r.preventDefault(),null==document.querySelector(".addTaskForm")){const r=t.createTaskForm();r.querySelector("input#taskDate").focus(),e.replaceWith(r),this.formTaskListener()}}))}}s.loadPage()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cmMvbW9kdWxlcy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9tYWluQ29udGVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90b2RvTGlzdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy91aUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFVJQ29udHJvbGxlciBmcm9tIFwiLi91aUNvbnRyb2xsZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2YmFyIHtcbiAgc3RhdGljIGxvYWRBZGRQcm9qZWN0KCkge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbihzeW1ib2wsIHRleHQpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBzcGFuLmNsYXNzTGlzdCA9IFwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiO1xuICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IHN5bWJvbDtcblxuICAgICAgY29uc3QgYnV0dG9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpO1xuXG4gICAgICBidXR0b24uYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICBidXR0b24uYXBwZW5kQ2hpbGQoYnV0dG9uVGV4dCk7XG4gICAgICBidXR0b24uaWQgPSBgZm9ybSR7dGV4dH1gO1xuXG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGVzdFwiKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBidXR0b247XG4gICAgfVxuICAgIC8vIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzQWRkZXJcIik7XG4gICAgLy8gYWRkUHJvamVjdC50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICBjb25zdCBmb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgZm9ybURpdi5pZCA9IFwiYWRkUHJvamVjdEZvcm1cIjtcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByb2plY3ROYW1lXCIpO1xuICAgIGxhYmVsLmlubmVyVGV4dCA9IFwiTmFtZTpcIjtcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcm9qZWN0TmFtZVwiKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3ROYW1lXCIpO1xuICAgIGlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBjb25zb2xlLmxvZyhpbnB1dCk7XG5cbiAgICBjb25zdCBidXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ1dHRvbkRpdi5jbGFzc0xpc3QgPSBcImJ1dHRvbnNcIjtcblxuICAgIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChjcmVhdGVCdXR0b24oXCJkb25lXCIsIFwiU3VibWl0XCIpKTtcbiAgICBidXR0b25EaXYuYXBwZW5kQ2hpbGQoY3JlYXRlQnV0dG9uKFwiY2FuY2VsXCIsIFwiQ2FuY2VsXCIpKTtcblxuICAgIGZvcm1EaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGZvcm1EaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGZvcm1EaXYuYXBwZW5kQ2hpbGQoYnV0dG9uRGl2KTtcblxuICAgIC8vIGxldDtcbiAgICByZXR1cm4gZm9ybURpdjtcbiAgfVxuXG4gIHN0YXRpYyByZXR1cm5Qcm9qZWN0SXRlbShuYW1lKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdC50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgcHJvamVjdC5pZCA9IFwicHJvamVjdEl0ZW1cIjtcbiAgICByZXR1cm4gcHJvamVjdDtcbiAgfVxuXG4gIHN0YXRpYyByZXR1cm5BZGRQcm9qZWN0QlROKCkge1xuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZFByb2plY3QudGV4dENvbnRlbnQgPSBcIisgQWRkIHByb2plY3RcIjtcbiAgICBhZGRQcm9qZWN0LmlkID0gXCJwcm9qZWN0QWRkZXJcIjtcbiAgICAvLyBhZGRQcm9qZWN0LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAvLyBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy8gICBhZGRQcm9qZWN0LnJlcGxhY2VXaXRoKHRoaXMubG9hZEFkZFByb2plY3QoKSk7XG4gICAgLy8gICAvLyBVSUNvbnRyb2xsZXIuYWRkUHJvamVjdEJUTi5mb3JtQlROUygpO1xuICAgIC8vICAgLy8gYWRkUHJvamVjdERPTSgpO1xuICAgIC8vIH0pO1xuICAgIHJldHVybiBhZGRQcm9qZWN0O1xuICB9XG59XG4iLCJpbXBvcnQgeyBmb3JtYXRSZWxhdGl2ZSB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBtYWluQ29udGVudFVJIHtcbiAgc3RhdGljIGNyZWF0ZVRhc2soZGF0ZVR4dCwgdGV4dCkge1xuICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tEaXYuY2xhc3NMaXN0ID0gXCJ0YXNrXCI7XG5cbiAgICBjb25zdCB0YXNrSW5mb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0luZm9EaXYuY2xhc3NMaXN0ID0gXCJ0YXNrSW5mb1wiO1xuXG4gICAgY29uc3QgY2hlY2tCb3hJbnB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNoZWNrQm94SW5wdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgY2hlY2tCb3hJbnB0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJmaW5pc2hlZFRhc2tcIik7XG4gICAgY2hlY2tCb3hJbnB0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZmluaXNoZWRUYXNrXCIpO1xuXG4gICAgY29uc3QgZGF0ZUlucHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZGF0ZUlucHQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gICAgZGF0ZUlucHQudmFsdWUgPSBkYXRlVHh0O1xuICAgIGRhdGVJbnB0LnJlYWRPbmx5ID0gdHJ1ZTtcblxuICAgIGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0ZXh0Tm9kZS5jbGFzc0xpc3QgPSBcIm5vdGVUZXh0XCI7XG4gICAgdGV4dE5vZGUudGV4dENvbnRlbnQgPSB0ZXh0O1xuXG4gICAgdGFza0luZm9EaXYuYXBwZW5kQ2hpbGQoY2hlY2tCb3hJbnB0KTtcbiAgICB0YXNrSW5mb0Rpdi5hcHBlbmRDaGlsZChkYXRlSW5wdCk7XG4gICAgdGFza0luZm9EaXYuYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xuXG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrSW5mb0Rpdik7XG5cbiAgICBjb25zdCBmdW5jdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZnVuY3Rpb25EaXYuY2xhc3NMaXN0ID0gXCJmdW5jdGlvbnNcIjtcblxuICAgIGNvbnN0IHNwYW5FZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgc3BhbkVkaXQuY2xhc3NMaXN0ID0gXCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIGVkaXRcIjtcbiAgICBzcGFuRWRpdC50ZXh0Q29udGVudCA9IFwiZWRpdFwiO1xuICAgIGNvbnN0IHNwYW5EZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBzcGFuRGVsZXRlLnRleHRDb250ZW50ID0gXCJkZWxldGVcIjtcbiAgICBzcGFuRGVsZXRlLmNsYXNzTGlzdCA9IFwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCBkZWxldGVcIjtcblxuICAgIGZ1bmN0aW9uRGl2LmFwcGVuZENoaWxkKHNwYW5FZGl0KTtcbiAgICBmdW5jdGlvbkRpdi5hcHBlbmRDaGlsZChzcGFuRGVsZXRlKTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGZ1bmN0aW9uRGl2KTtcblxuICAgIHJldHVybiB0YXNrRGl2O1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUFkZFRhc2soKSB7XG4gICAgY29uc3QgYWRkVGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkVGFza0Rpdi5jbGFzc0xpc3QgPSBcImFkZFRhc2tcIjtcbiAgICBhZGRUYXNrRGl2LnRleHRDb250ZW50ID0gXCIrIEFkZCBUYXNrXCI7XG4gICAgcmV0dXJuIGFkZFRhc2tEaXY7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlVGFza0Zvcm0oKSB7XG4gICAgLy8gQ2hlYXRpbmc/IHllcy4gVGlyZWQ/IHllcy5cbiAgICBjb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkVGFza0Zvcm0uY2xhc3NMaXN0ID0gXCJhZGRUYXNrRm9ybVwiO1xuXG4gICAgY29uc3QgYWxsSFRNTCA9IGBcbiAgICA8Zm9ybSBhY3Rpb249XCJcIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJkYXRlXCI+RGF0ZTo8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwidGFza0RhdGVcIiBpZD1cInRhc2tEYXRlXCIgLz5cbiAgICAgICAgPGxhYmVsIGZvcj1cIlRhc2tcIj5UYXNrOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0YXNrVGV4dFwiIGlkPVwidGFza1RleHRcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidGFza0Zvcm1CdXR0b25zXCI+XG4gICAgICAgIDxidXR0b24gaWQ9XCJmb3JtU3VibWl0XCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+ZG9uZTwvc3Bhbj5TdWJtaXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gaWQ9XCJmb3JtQ2FuY2VsXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+Y2FuY2VsPC9zcGFuPkNhbmNlbFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgYDtcblxuICAgIGFkZFRhc2tGb3JtLmlubmVySFRNTCA9IGFsbEhUTUw7XG5cbiAgICBjb25zdCBzdWJtaXRCVE4gPSBhZGRUYXNrRm9ybS5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1TdWJtaXRcIik7XG4gICAgY29uc3QgY2FuY2VsQlROID0gYWRkVGFza0Zvcm0ucXVlcnlTZWxlY3RvcihcIiNmb3JtQ2FuY2VsXCIpO1xuXG4gICAgc3VibWl0QlROLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuXG4gICAgY2FuY2VsQlROLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuICAgIHJldHVybiBhZGRUYXNrRm9ybTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudGFza3MgPSBbXTtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRUYXNrcygpIHtcbiAgICByZXR1cm4gdGhpcy50YXNrcztcbiAgfVxuXG4gIGdldFRhc2sodGFza05hbWUpIHtcbiAgICByZXR1cm4gdGhpcy50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmdldE5hbWUoKSA9PT0gdGFza05hbWUpO1xuICB9XG5cbiAgYWRkVGFzayh0YXNrKSB7XG4gICAgcmV0dXJuIHRoaXMudGFza3MucHVzaCh0YXNrKTtcbiAgfVxufVxuIiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiO1xuXG5jbGFzcyBUb2RvTGlzdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucHJvamVjdHMgPSBbXTtcbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoXCJtYWluXCIpKTtcbiAgfVxuXG4gIGdldFByb2plY3RzKCkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3RzO1xuICB9XG5cbiAgLy8gZ2V0UHJvamVjdChuYW1lKSB7XG4gIC8vICAgdGhpcy5wcm9qZWN0cy5mb3JFYWNoKChhUHJvamVjdCkgPT4ge1xuICAvLyAgICAgaWYgKGFQcm9qZWN0Lm5hbWUgPT09IG5hbWUpIHtcbiAgLy8gICAgICAgcmV0dXJuIGFQcm9qZWN0O1xuICAvLyAgICAgfVxuICAvLyAgIH0pO1xuICAvLyB9XG5cbiAgZ2V0QVByb2plY3QobmFtZSkge1xuICAgIC8vIGNvbnNvbGUubG9nKG9iamVjdCk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5wcm9qZWN0c1swXS5nZXROYW1lKCkpO1xuICAgIHJldHVybiB0aGlzLnByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuZ2V0TmFtZSgpID09PSBuYW1lKTtcbiAgfVxuXG4gIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoYCR7cHJvamVjdH1gKSk7XG4gIH1cbn1cblxuY29uc3QgYVRvZG9MaXN0ID0gbmV3IFRvZG9MaXN0KCk7XG5leHBvcnQgZGVmYXVsdCBhVG9kb0xpc3Q7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZGF0ZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICAvLyB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5kb25lID0gZmFsc2U7XG4gIH1cblxuICBzZXREYXRlKGRhdGUpIHtcbiAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICB9XG5cbiAgZ2V0RGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRlO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIC8vIHNldFByaW9yaXR5KHByaW9yaXR5KSB7XG4gIC8vICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAvLyB9XG5cbiAgLy8gZ2V0UHJpb3JpdHkoKSB7XG4gIC8vICAgcmV0dXJuIHRoaXMucHJpb3JpdHk7XG4gIC8vIH1cbn1cbiIsImltcG9ydCBOYXZiYXIgZnJvbSBcIi4vbmF2YmFyXCI7XG5pbXBvcnQgbWFpbkNvbnRlbnRVSSBmcm9tIFwiLi9tYWluQ29udGVudFwiO1xuaW1wb3J0IGFUb2RvTGlzdCBmcm9tIFwiLi90b2RvTGlzdFwiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSUNvbnRyb2xsZXIge1xuICBzdGF0aWMgbG9hZFBhZ2UoKSB7XG4gICAgdGhpcy5hZGRQcm9qZWN0TGlzdGVuZXIoKTtcbiAgICB0aGlzLnByb2plY3RMaXN0ZW5lcigpO1xuICAgIHRoaXMuYWRkVGFza0xpc3RlbmVyKCk7XG4gICAgLy8gY29uc3QgYm9keURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIC8vIGJvZHlEaXYuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVIZWFkZXIoKSk7XG4gICAgLy8gYm9keURpdi5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUZvb3RlcigpKTtcbiAgICAvLyBib2R5RGl2LmFwcGVuZENoaWxkKE5hdmJhci5sb2FkTmF2KCkpO1xuICAgIC8vIGJvZHlEaXYuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQuY3JlYXRlTWFpbigpKTtcbiAgfVxuXG4gIHN0YXRpYyBjdXJyZW50UHJvamVjdE9CSiA9IGFUb2RvTGlzdC5nZXRBUHJvamVjdChcIm1haW5cIik7XG5cbiAgc3RhdGljIGNyZWF0ZUhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlckRpdi5jbGFzc0xpc3QgPSBcImhlYWRlclwiO1xuICAgIHJldHVybiBoZWFkZXJEaXY7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlRm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9vdGVyRGl2LmNsYXNzTGlzdCA9IFwiZm9vdGVyXCI7XG4gICAgcmV0dXJuIGZvb3RlckRpdjtcbiAgfVxuXG4gIHN0YXRpYyBhZGRQcm9qZWN0Rm9ybUJUTlMoKSB7XG4gICAgY29uc3Qgc3VibWl0QlROID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtU3VibWl0XCIpO1xuICAgIGNvbnN0IGNhbmNlbEJUTiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybUNhbmNlbFwiKTtcbiAgICBjb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0TmFtZVwiKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRQcm9qZWN0Rm9ybVwiKTtcbiAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdERPTUxvY2F0aW9uKTtcbiAgICBpbnB1dEZpZWxkLmZvY3VzKCk7XG5cbiAgICBzdWJtaXRCVE4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAvLyBjb25zdCBsYXN0UHJvamVjdERPTSA9IHByb2plY3RMaXN0RE9NW3Byb2plY3RMaXN0RE9NLmxlbmd0aCAtIDFdO1xuXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoXG4gICAgICAgIGlucHV0RmllbGQudmFsdWUgIT09IFwiXCIgJiZcbiAgICAgICAgYVRvZG9MaXN0LmdldEFQcm9qZWN0KGlucHV0RmllbGQudmFsdWUpID09IG51bGxcbiAgICAgICkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhpbnB1dEZpZWxkLnZhbHVlKTtcbiAgICAgICAgaW5wdXRGaWVsZC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIGZvcm0ucmVwbGFjZVdpdGgoTmF2YmFyLnJldHVybkFkZFByb2plY3RCVE4oKSk7XG4gICAgICAgIHRoaXMuYWRkUHJvamVjdExpc3RlbmVyKCk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdExpc3RET01Mb2NhdGlvbiA9XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdiNwcm9qZWN0QWRkZXJcIik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RMaXN0RE9NTG9jYXRpb24pO1xuXG4gICAgICAgIGNvbnN0IGFQcm9qZWN0SXRlbSA9IE5hdmJhci5yZXR1cm5Qcm9qZWN0SXRlbShpbnB1dEZpZWxkLnZhbHVlKTtcbiAgICAgICAgcHJvamVjdExpc3RET01Mb2NhdGlvbi5iZWZvcmUoYVByb2plY3RJdGVtKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhhUHJvamVjdEl0ZW0pO1xuICAgICAgICAvLyB0aGlzLnByb2plY3RMaXN0ZW5lcigpO1xuXG4gICAgICAgIGFUb2RvTGlzdC5hZGRQcm9qZWN0KGlucHV0RmllbGQudmFsdWUpO1xuXG4gICAgICAgIGFQcm9qZWN0SXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwid29ya3NcIik7XG4gICAgICAgICAgdGhpcy5kaWZmZXJlbnRQcm9qZWN0U2VsZWN0ZWQoaW5wdXRGaWVsZC52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY2FuY2VsQlROLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc29sZS5sb2coXCJ0ZXN0XCIpO1xuXG4gICAgICBmb3JtLnJlcGxhY2VXaXRoKE5hdmJhci5yZXR1cm5BZGRQcm9qZWN0QlROKCkpO1xuICAgICAgdGhpcy5hZGRQcm9qZWN0TGlzdGVuZXIoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBwcm9qZWN0TGlzdGVuZXIoKSB7XG4gICAgLy8gY29uc3QgYWxsUHJvamVjdHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImRpdiNwcm9qZWN0SXRlbVwiKTtcblxuICAgIGNvbnN0IG1haW5Qcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmltYXJ5ID4gZGl2Om50aC1jaGlsZCgxKVwiKTtcblxuICAgIG1haW5Qcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhhVG9kb0xpc3QuZ2V0QVByb2plY3QoXCJtYWluXCIpKTtcbiAgICAgIC8vIHRoaXMudXBkYXRlTWFpbkRpdlByb2plY3QoXCJtYWluXCIpO1xuICAgICAgdGhpcy5kaWZmZXJlbnRQcm9qZWN0U2VsZWN0ZWQoXCJtYWluXCIpO1xuICAgIH0pO1xuXG4gICAgLy8gYWxsUHJvamVjdHNMaXN0LmZvckVhY2goKGFQcm9qZWN0RE9NKSA9PiB7XG4gICAgLy8gICBhUHJvamVjdERPTS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIC8vICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGFQcm9qZWN0RE9NLnRleHRDb250ZW50O1xuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0TmFtZSk7XG5cbiAgICAvLyAgICAgY29uc29sZS5sb2coYVRvZG9MaXN0LmdldEFQcm9qZWN0KHByb2plY3ROYW1lKSk7XG4gICAgLy8gICB9KTtcbiAgICAvLyB9KTtcbiAgfVxuXG4gIHN0YXRpYyBhZGRQcm9qZWN0TGlzdGVuZXIoKSB7XG4gICAgY29uc3QgYWRkUHJvamVjdERPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdEFkZGVyXCIpO1xuICAgIGFkZFByb2plY3RET00uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGFkZFByb2plY3RET00ucmVwbGFjZVdpdGgoTmF2YmFyLmxvYWRBZGRQcm9qZWN0KCkpO1xuICAgICAgdGhpcy5hZGRQcm9qZWN0Rm9ybUJUTlMoKTtcbiAgICAgIC8vIGFkZFByb2plY3RET00oKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB0YXNrTGlzdGVuZXIodGFza0Rpdikge1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IHRhc2tEaXYucXVlcnlTZWxlY3RvcihcIi5kZWxldGVcIik7XG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IHRhc2tEaXYucXVlcnlTZWxlY3RvcihcIi5lZGl0XCIpO1xuICAgIGNvbnN0IGNoZWNrYm94ID0gdGFza0Rpdi5xdWVyeVNlbGVjdG9yKFwiI2ZpbmlzaGVkVGFza1wiKTtcblxuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGFza0Rpdi5yZW1vdmUoKTtcbiAgICB9KTtcblxuICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSB0YXNrRGl2O1xuICAgICAgLy8gY29uc29sZS5sb2coY3VycmVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdGVUZXh0XCIpKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRUZXh0ID0gdGFza0Rpdi5xdWVyeVNlbGVjdG9yKFwiLm5vdGVUZXh0XCIpLnRleHRDb250ZW50O1xuICAgICAgY29uc3QgY3VycmVudERhdGUgPSB0YXNrRGl2LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W3R5cGU9XCJkYXRlXCJdYCkudmFsdWU7XG4gICAgICBjb25zdCBlZGl0VGFza0Zvcm0gPSBtYWluQ29udGVudFVJLmNyZWF0ZVRhc2tGb3JtKCk7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiY3VycmVudCBUZXh0XCIsIGN1cnJlbnRUZXh0KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiY3VycmVudCBEYXRlXCIsIGN1cnJlbnREYXRlKTtcblxuICAgICAgZWRpdFRhc2tGb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjdGFza1RleHRcIikudmFsdWUgPSBjdXJyZW50VGV4dDtcbiAgICAgIGVkaXRUYXNrRm9ybS5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tEYXRlXCIpLnZhbHVlID0gY3VycmVudERhdGU7XG5cbiAgICAgIC8vIGVkaXRUYXNrRm9ybS5xdWVyeVNlbGVjdG9yKCk7XG5cbiAgICAgIGN1cnJlbnQucmVwbGFjZVdpdGgoZWRpdFRhc2tGb3JtKTtcbiAgICAgIHRoaXMuZWRpdFRhc2tMaXN0ZW5lcihlZGl0VGFza0Zvcm0sIGN1cnJlbnQpO1xuICAgIH0pO1xuXG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LnRvZ2dsZShcImNoZWNrZWRcIik7XG4gICAgfSk7XG5cbiAgICAvLyBsZXQ7XG4gIH1cblxuICBzdGF0aWMgZWRpdFRhc2tMaXN0ZW5lcihlZGl0Rm9ybSwgY3VycmVudCkge1xuICAgIGNvbnN0IGZvcm1TdWJtaXRCVE4gPSBlZGl0Rm9ybS5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1TdWJtaXRcIik7XG4gICAgY29uc3QgZm9ybUNhbmNlbEJUTiA9IGVkaXRGb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybUNhbmNlbFwiKTtcbiAgICBjb25zdCBmb3JtRGF0ZUlucHV0ID0gZWRpdEZvcm0ucXVlcnlTZWxlY3RvcihcIiN0YXNrRGF0ZVwiKTtcbiAgICAvLyBjb25zdCBmb3JtID0gZWRpdEZvcm0ucXVlcnlTZWxlY3RvcihcIi5hZGRUYXNrRm9ybVwiKTtcblxuICAgIGNvbnN0IGZvcm1UZXh0SW5wdXQgPSBlZGl0Rm9ybS5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tUZXh0XCIpO1xuICAgIGZvcm1TdWJtaXRCVE4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcInp6enpcIik7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoZm9ybURhdGVJbnB1dC52YWx1ZSAhPT0gXCJcIiAmJiBmb3JtRGF0ZUlucHV0LnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBmb3JtRGF0ZUlucHV0LnZhbHVlO1xuICAgICAgICBjb25zdCB0ZXh0ID0gZm9ybVRleHRJbnB1dC52YWx1ZTtcblxuICAgICAgICAvLyBlZGl0Rm9ybS5yZXBsYWNlV2l0aChtYWluQ29udGVudFVJLmNyZWF0ZVRhc2soKSk7XG4gICAgICAgIC8vIGNvbnN0IGFkZFRhc2sgPSBlZGl0Rm9ybS5xdWVyeVNlbGVjdG9yKFwiLmFkZFRhc2tcIik7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBtYWluQ29udGVudFVJLmNyZWF0ZVRhc2soZGF0ZSwgdGV4dCk7XG4gICAgICAgIGVkaXRGb3JtLnJlcGxhY2VXaXRoKHRhc2spO1xuICAgICAgICB0aGlzLnRhc2tMaXN0ZW5lcih0YXNrKTtcblxuICAgICAgICAvLyB0YXNrQlROU1xuXG4gICAgICAgIC8vIHRoaXMuYWRkVGFza0xpc3RlbmVyKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coZm9ybVN1Ym1pdEJUTik7XG4gICAgZm9ybUNhbmNlbEJUTi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGVkaXRGb3JtLnJlcGxhY2VXaXRoKGN1cnJlbnQpO1xuICAgICAgLy8gdGhpcy5hZGRUYXNrTGlzdGVuZXIoKTtcbiAgICAgIHRoaXMudGFza0xpc3RlbmVyKGN1cnJlbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRpZmZlcmVudFByb2plY3RTZWxlY3RlZChwcm9qZWN0TmFtZSkge1xuICAgIGNvbnNvbGUubG9nKGFUb2RvTGlzdC5nZXRBUHJvamVjdChwcm9qZWN0TmFtZSkpO1xuICAgIHRoaXMuY3VycmVudFByb2plY3RPQkogPSBhVG9kb0xpc3QuZ2V0QVByb2plY3QocHJvamVjdE5hbWUpO1xuICAgIHRoaXMudXBkYXRlTWFpbkRpdlByb2plY3QocHJvamVjdE5hbWUpO1xuXG4gICAgLy8gY3VycmVudFByb2plY3RPQkogPVxuICB9XG5cbiAgc3RhdGljIHVwZGF0ZU1haW5EaXZQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgY29uc3QgbWFpbkRPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcbiAgICBtYWluRE9NLmRhdGFzZXQuY3VycmVudFByb2plY3QgPSBwcm9qZWN0TmFtZTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRQcm9qZWN0T0JKLmdldFRhc2tzKCkpO1xuICAgIGNvbnN0IG9sZFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImRpdi50YXNrXCIpO1xuICAgIG9sZFRhc2tzLmZvckVhY2goKGFTaW5ndWxhclRhc2spID0+IHtcbiAgICAgIGFTaW5ndWxhclRhc2sucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmN1cnJlbnRQcm9qZWN0T0JKLmdldFRhc2tzKCkuZm9yRWFjaCgoYVRhc2spID0+IHtcbiAgICAgIC8vIG9sZFRhc2tzLnJlbW92ZSgpO1xuICAgICAgY29uc29sZS5sb2coXCJBIHRhc2tcIiwgYVRhc2spO1xuICAgICAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkVGFza1wiKTtcbiAgICAgIGNvbnN0IHRhc2sgPSBtYWluQ29udGVudFVJLmNyZWF0ZVRhc2soYVRhc2suZ2V0TmFtZSgpLCBhVGFzay5nZXREYXRlKCkpO1xuXG4gICAgICB0aGlzLnRhc2tMaXN0ZW5lcih0YXNrKTtcbiAgICAgIGFkZFRhc2suYmVmb3JlKHRhc2spO1xuXG4gICAgICB0aGlzLmFkZFRhc2tMaXN0ZW5lcigpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGFkZEN1cnJlbnRUYXNrcygpIHt9XG5cbiAgc3RhdGljIGZvcm1UYXNrTGlzdGVuZXIoKSB7XG4gICAgY29uc3QgZm9ybVN1Ym1pdEJUTiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybVN1Ym1pdFwiKTtcbiAgICBjb25zdCBmb3JtQ2FuY2VsQlROID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtQ2FuY2VsXCIpO1xuICAgIGNvbnN0IGZvcm1EYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tEYXRlXCIpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFRhc2tGb3JtXCIpO1xuXG4gICAgY29uc3QgZm9ybVRleHRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza1RleHRcIik7XG4gICAgZm9ybVN1Ym1pdEJUTi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwienp6elwiKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChmb3JtRGF0ZUlucHV0LnZhbHVlICE9PSBcIlwiICYmIGZvcm1EYXRlSW5wdXQudmFsdWUgIT09IFwiXCIpIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IGZvcm1EYXRlSW5wdXQudmFsdWU7XG4gICAgICAgIGNvbnN0IHRleHQgPSBmb3JtVGV4dElucHV0LnZhbHVlO1xuXG4gICAgICAgIGZvcm0ucmVwbGFjZVdpdGgobWFpbkNvbnRlbnRVSS5jcmVhdGVBZGRUYXNrKCkpO1xuICAgICAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRUYXNrXCIpO1xuICAgICAgICBjb25zdCB0YXNrID0gbWFpbkNvbnRlbnRVSS5jcmVhdGVUYXNrKGRhdGUsIHRleHQpO1xuXG4gICAgICAgIHRoaXMudGFza0xpc3RlbmVyKHRhc2spO1xuICAgICAgICBhZGRUYXNrLmJlZm9yZSh0YXNrKTtcblxuICAgICAgICB0aGlzLmFkZFRhc2tMaXN0ZW5lcigpO1xuXG4gICAgICAgIHRoaXMuY3VycmVudFByb2plY3RPQkouYWRkVGFzayhuZXcgVGFzayhkYXRlLCB0ZXh0KSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coZm9ybVN1Ym1pdEJUTik7XG4gICAgZm9ybUNhbmNlbEJUTi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGZvcm0ucmVwbGFjZVdpdGgobWFpbkNvbnRlbnRVSS5jcmVhdGVBZGRUYXNrKCkpO1xuICAgICAgdGhpcy5hZGRUYXNrTGlzdGVuZXIoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBhZGRUYXNrTGlzdGVuZXIoKSB7XG4gICAgY29uc3QgYWRkVGFza0RPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkVGFza1wiKTtcbiAgICBhZGRUYXNrRE9NLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkVGFza0Zvcm1cIikgPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB0YXNrRm9ybURPTSA9IG1haW5Db250ZW50VUkuY3JlYXRlVGFza0Zvcm0oKTtcbiAgICAgICAgY29uc3QgZGF0ZUlOUFQgPSB0YXNrRm9ybURPTS5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjdGFza0RhdGVcIik7XG4gICAgICAgIGRhdGVJTlBULmZvY3VzKCk7XG4gICAgICAgIGFkZFRhc2tET00ucmVwbGFjZVdpdGgodGFza0Zvcm1ET00pO1xuICAgICAgICAvLyB0aGlzLmFkZFRhc2tMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLmZvcm1UYXNrTGlzdGVuZXIoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IFVJQ29udHJvbGxlciBmcm9tIFwiLi9tb2R1bGVzL3VpQ29udHJvbGxlclwiO1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gXCIuL21vZHVsZXMvdG9kb0xpc3RcIjtcblxuLy8gY29uc29sZS5sb2coYVRvZG9MaXN0LnByb2plY3RzKTtcbi8vXG4vLyBjb25zb2xlLmxvZyhhVG9kb0xpc3QuZ2V0QVByb2plY3QoXCJtYWluXCIpKTtcblxuVUlDb250cm9sbGVyLmxvYWRQYWdlKCk7XG4iXSwibmFtZXMiOlsiTmF2YmFyIiwic3RhdGljIiwiY3JlYXRlQnV0dG9uIiwic3ltYm9sIiwidGV4dCIsImJ1dHRvbiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNwYW4iLCJjbGFzc0xpc3QiLCJ0ZXh0Q29udGVudCIsImJ1dHRvblRleHQiLCJjcmVhdGVUZXh0Tm9kZSIsImFwcGVuZENoaWxkIiwiaWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybURpdiIsImxhYmVsIiwic2V0QXR0cmlidXRlIiwiaW5uZXJUZXh0IiwiaW5wdXQiLCJyZXF1aXJlZCIsImNvbnNvbGUiLCJsb2ciLCJidXR0b25EaXYiLCJuYW1lIiwicHJvamVjdCIsImFkZFByb2plY3QiLCJtYWluQ29udGVudFVJIiwiZGF0ZVR4dCIsInRhc2tEaXYiLCJ0YXNrSW5mb0RpdiIsImNoZWNrQm94SW5wdCIsImRhdGVJbnB0IiwidmFsdWUiLCJyZWFkT25seSIsInRleHROb2RlIiwiZnVuY3Rpb25EaXYiLCJzcGFuRWRpdCIsInNwYW5EZWxldGUiLCJhZGRUYXNrRGl2IiwiYWRkVGFza0Zvcm0iLCJpbm5lckhUTUwiLCJzdWJtaXRCVE4iLCJxdWVyeVNlbGVjdG9yIiwiY2FuY2VsQlROIiwiUHJvamVjdCIsImNvbnN0cnVjdG9yIiwidGhpcyIsInRhc2tzIiwic2V0TmFtZSIsImdldE5hbWUiLCJnZXRUYXNrcyIsImdldFRhc2siLCJ0YXNrTmFtZSIsImZpbmQiLCJ0YXNrIiwiYWRkVGFzayIsInB1c2giLCJwcm9qZWN0cyIsImdldFByb2plY3RzIiwiZ2V0QVByb2plY3QiLCJUYXNrIiwiZGF0ZSIsImRvbmUiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsIlVJQ29udHJvbGxlciIsImFkZFByb2plY3RMaXN0ZW5lciIsInByb2plY3RMaXN0ZW5lciIsImFkZFRhc2tMaXN0ZW5lciIsImhlYWRlckRpdiIsImZvb3RlckRpdiIsImlucHV0RmllbGQiLCJmb3JtIiwiZm9jdXMiLCJyZXBsYWNlV2l0aCIsInJldHVybkFkZFByb2plY3RCVE4iLCJwcm9qZWN0TGlzdERPTUxvY2F0aW9uIiwiYVByb2plY3RJdGVtIiwicmV0dXJuUHJvamVjdEl0ZW0iLCJiZWZvcmUiLCJkaWZmZXJlbnRQcm9qZWN0U2VsZWN0ZWQiLCJhZGRQcm9qZWN0RE9NIiwibG9hZEFkZFByb2plY3QiLCJhZGRQcm9qZWN0Rm9ybUJUTlMiLCJkZWxldGVCdXR0b24iLCJlZGl0QnV0dG9uIiwiY2hlY2tib3giLCJyZW1vdmUiLCJjdXJyZW50IiwiY3VycmVudFRleHQiLCJjdXJyZW50RGF0ZSIsImVkaXRUYXNrRm9ybSIsImNyZWF0ZVRhc2tGb3JtIiwiZWRpdFRhc2tMaXN0ZW5lciIsInRvZ2dsZSIsImVkaXRGb3JtIiwiZm9ybVN1Ym1pdEJUTiIsImZvcm1DYW5jZWxCVE4iLCJmb3JtRGF0ZUlucHV0IiwiZm9ybVRleHRJbnB1dCIsImNyZWF0ZVRhc2siLCJ0YXNrTGlzdGVuZXIiLCJwcm9qZWN0TmFtZSIsImN1cnJlbnRQcm9qZWN0T0JKIiwidXBkYXRlTWFpbkRpdlByb2plY3QiLCJkYXRhc2V0IiwiY3VycmVudFByb2plY3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImFTaW5ndWxhclRhc2siLCJhVGFzayIsImNyZWF0ZUFkZFRhc2siLCJhZGRUYXNrRE9NIiwidGFza0Zvcm1ET00iLCJmb3JtVGFza0xpc3RlbmVyIiwibG9hZFBhZ2UiXSwic291cmNlUm9vdCI6IiJ9