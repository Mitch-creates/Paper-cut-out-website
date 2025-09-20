import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="min-h-screen bg-paper flex items-center justify-center">
    <div class="text-center space-y-8 p-8 bg-white rounded-xl shadow-paper">
      <div class="flex justify-center space-x-8">
        <a href="https://vite.dev" target="_blank" class="transition-transform hover:scale-110">
          <img src="${viteLogo}" class="h-24 w-24" alt="Vite logo" />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank" class="transition-transform hover:scale-110">
          <img src="${typescriptLogo}" class="h-24 w-24" alt="TypeScript logo" />
        </a>
      </div>
      <h1 class="text-4xl font-bold text-ink">Vite + TypeScript</h1>
      <div class="bg-blue-500 rounded-lg shadow-lg p-6 max-w-sm mx-auto border border-gray-200">
        <button id="counter" type="button" class="bg-ink hover:bg-gray-700 text-paper font-semibold py-2 px-4 rounded-lg transition-colors"></button>
      </div>
      <p class="text-ink/70 max-w-md mx-auto">
        Click on the Vite and TypeScript logos to learn more
      </p>
    </div>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
