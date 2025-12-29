export function Navbar() {
  const path = window.location.pathname;

  const linkClass = target =>
    path === target
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-600";

  return `
    <nav class="bg-white shadow-md px-8 py-4 flex justify-between items-center">
      <h1 class="text-xl font-bold text-blue-600 cursor-pointer" data-link="/">
        JS Practice
      </h1>

      <div class="space-x-6">
        <a href="/" data-link class="${linkClass("/")}">Home</a>
        <a href="/questions" data-link class="${linkClass("/questions")}">
          Questions
        </a>
        <a href="/about" data-link class="${linkClass("/about")}">About</a>
      </div>
    </nav>
  `;
}
