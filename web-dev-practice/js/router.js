import { Home } from "../pages/home.js";
import { Questions } from "../pages/questions.js";
import { About } from "../pages/about.js";
import { Navbar } from "../pages/navbar.js";
import { QuestionDetail } from "../pages/questionDetail.js";

export function router() {
  const path = window.location.pathname;
  const app = document.getElementById("app");

  let content = "";

  // Dynamic route: /questions/:id
  if (path.startsWith("/questions/")) {
    const id = path.split("/")[2];
    content = QuestionDetail(id);
  } 
  else if (path === "/questions") {
    content = Questions();
  } 
  else if (path === "/about") {
    content = About();
  } 
  else {
    content = Home();
  }

  app.innerHTML = `
    ${Navbar()}
    <main class="min-h-screen">
      ${content}
    </main>
  `;
  window.scrollTo({ top: 0, behavior: "smooth" });
}
