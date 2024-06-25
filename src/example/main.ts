import { isAppleVisionPro } from "@/VisionPro.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <p id="deviceInfo"></p>
  </div>
`;

const isAVP = isAppleVisionPro();
const deviceInfoElement =
  document.querySelector<HTMLParagraphElement>("#deviceInfo")!;

const message = isAVP
  ? "This device is an Apple Vision Pro."
  : "This device is not an Apple Vision Pro.";
console.log(message);
deviceInfoElement.textContent = message;
