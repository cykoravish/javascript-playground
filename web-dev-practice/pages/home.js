export function Home() {
  return `
    <section class="min-h-screen flex flex-col justify-center items-center">
      <h1 class="text-4xl font-bold mb-4 text-blue-600">
        JavaScript Practice
      </h1>

      <p class="text-gray-600 mb-6 text-center max-w-md">
        Practice JavaScript questions from beginner to advanced.
        Learn by solving real interview-style problems.
      </p>

      <button
        data-link="/questions"
        class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Start Practicing
      </button>
    </section>
  `;
}
