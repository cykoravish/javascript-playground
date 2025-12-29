import { questions } from "../js/questionsData.js";

export function renderQuestions(level = "all") {
  const filtered =
    level === "all" ? questions : questions.filter((q) => q.level === level);

  return filtered
    .map(
      (q) => `
      <div class="bg-white p-5 rounded-lg shadow">
        <h2 class="font-semibold text-lg" data-link="/questions/${q.id}">
          ${q.title}
        </h2>

        <p class="text-sm text-gray-500 mt-1">
          Level: ${q.level}
        </p>

        <details class="mt-3">
          <summary class="cursor-pointer text-blue-600">
            Show Answer
          </summary>
          <p class="mt-2 text-gray-700">
            ${q.answer}
          </p>
        </details>
      </div>
    `
    )
    .join("");
}

export function Questions() {
  return `
    <section class="p-10 max-w-3xl mx-auto">
      <h1 class="text-3xl font-bold mb-6">
        JavaScript Practice Questions
      </h1>

     <div class="flex gap-4 mb-6">
  <button data-filter="all" class="filter-btn px-4 py-2 rounded-lg border ${sessionStorage.getItem("activeLevel") === "all" ? "bg-blue-600 text-white" : ""}" ">
    All
  </button>
  <button data-filter="beginner" class="filter-btn px-4 py-2 rounded-lg border  ${sessionStorage.getItem("activeLevel") === "all" ? "bg-blue-600 text-white" : ""}"">
    Beginner
  </button>
  <button data-filter="intermediate" class="filter-btn px-4 py-2 rounded-lg border  ${sessionStorage.getItem("activeLevel") === "all" ? "bg-blue-600 text-white" : ""}"">
    Intermediate
  </button>
</div>


      <div id="questions-list" class="space-y-4">
        ${renderQuestions(sessionStorage.getItem("activeLevel") || "all")}

      </div>
    </section>
  `;
}
