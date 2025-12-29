import { questions } from "../js/questionsData.js";

export function QuestionDetail(id) {
  const question = questions.find(q => q.id === Number(id));

  if (!question) {
    return `
      <section class="p-10 text-center">
        <h1 class="text-2xl font-bold">Question not found</h1>
      </section>
    `;
  }

  return `
    <section class="p-10 max-w-3xl mx-auto">
      <button
        data-link="/questions"
        class="mb-6 text-blue-600 hover:underline"
      >
        ← Back to Questions
      </button>

      <h1 class="text-3xl font-bold mb-4">
        ${question.title}
      </h1>

      <p class="text-sm text-gray-500 mb-4">
        Level: ${question.level}
      </p>

      <div class="bg-white p-6 rounded-lg shadow text-gray-700">
        ${question.answer}
      </div>
    </section>
  `;
}
