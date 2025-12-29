import { router } from "./router.js";
import { renderQuestions } from "../pages/questions.js";

let activeLevel = sessionStorage.getItem("activeLevel") || "all";

router();

// SPA navigation
document.addEventListener("click", (e) => {
  const link = e.target.closest("[data-link]");
  if (link) {
    e.preventDefault();
    const path = link.getAttribute("href") || link.dataset.link;
    window.history.pushState({}, "", path);
    router();
    return;
  }

  const filterBtn = e.target.closest("[data-filter]");
  if (filterBtn) {
    activeLevel = filterBtn.dataset.filter;
    sessionStorage.setItem("activeLevel", activeLevel);

    // update questions
    const list = document.getElementById("questions-list");
    if (list) {
      list.innerHTML = renderQuestions(activeLevel);
    }

    // update active button UI
    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.classList.remove("bg-blue-600", "text-white");
      btn.classList.add("bg-white", "text-gray-700");
    });

    filterBtn.classList.add("bg-blue-600", "text-white");
    filterBtn.classList.remove("bg-white", "text-gray-700");
  }
});

// Back / forward
window.addEventListener("popstate", router);
