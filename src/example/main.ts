import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";
import { isAppleVisionPro } from "@/VisionPro.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
    <p id="deviceInfo"></p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);

const isAVP = isAppleVisionPro();
const deviceInfoElement =
  document.querySelector<HTMLParagraphElement>("#deviceInfo")!;

const message = isAVP
  ? "This device is an Apple Vision Pro."
  : "This device is not an Apple Vision Pro.";
console.log(message);
deviceInfoElement.textContent = message;
