import Navbar from "./navbar";
import mainContent from "./mainContent";

export default class UIController {
  static loadPage() {
    const bodyDiv = document.querySelector("body");
    bodyDiv.appendChild(this.createHeader());
    bodyDiv.appendChild(this.createFooter());
    bodyDiv.appendChild(Navbar.loadNav());
    bodyDiv.appendChild(mainContent.createMain());
  }

  static createHeader() {
    const headerDiv = document.createElement("div");
    headerDiv.classList = "header";
    return headerDiv;
  }

  static createFooter() {
    const footerDiv = document.createElement("div");
    footerDiv.classList = "footer";
    return footerDiv;
  }
}
