import type { Person } from "../data/people";
import { getPeopleById } from "../data/people";

export interface ModalScreenProps {
  person: Person;
}

export default function ModalScreen({ person }: ModalScreenProps): string {
  const { name, distance, imageSrc, motivation, backgroundColor } = person;
  return `<div id="modal" class="hidden fixed inset-0 bg-${backgroundColor} bg-opacity-90 flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto">
      <h2 class="text-xl font-bold mb-2">${name}</h2>
      <p class="text-gray-700 mb-4">Distance: ${distance}</p>
      <img src="${imageSrc}" alt="${name}" class="w-full h-auto rounded-lg mb-4" />
      <p class="text-gray-700 mb-4">Motivation: ${motivation}</p>
      <button class="bg-${backgroundColor} text-white px-4 py-2 rounded">Close</button>
    </div>
  </div>`;
}

export function openModal(runnerId: number) {
  const runner = getPeopleById(runnerId);
  const modal = document.getElementById("modal");

  if (modal && runner) {
    // Update the modal content instead of replacing innerHTML completely
    modal.classList.remove("hidden");

    // Find and update specific elements within the modal
    const nameEl = modal.querySelector("h2");
    const distanceEl = modal.querySelector("p:first-of-type");
    const imgEl = modal.querySelector("img");
    const motivationEl = modal.querySelector("p:last-of-type");

    if (nameEl) nameEl.textContent = runner.name;
    if (distanceEl) distanceEl.textContent = `Distance: ${runner.distance}`;
    if (imgEl) {
      imgEl.src = runner.imageSrc;
      imgEl.alt = runner.name;
    }
    if (motivationEl)
      motivationEl.textContent = `Motivation: ${runner.motivation}`;

    // Prevent body scroll
    document.body.style.overflow = "hidden";
  }
}

export function closeModal() {
  const modal = document.getElementById("modal");
  if (modal) {
    modal.classList.add("hidden");
    // Restore body scroll
    document.body.style.overflow = "";
  }
}
