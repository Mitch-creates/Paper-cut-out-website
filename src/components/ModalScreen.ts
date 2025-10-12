import type { Person } from "../data/people";
import { getPeopleById } from "../data/people";

export interface ModalScreenProps {
  person: Person;
}

export default function ModalScreen({ person }: ModalScreenProps): string {
  const { name, distance, imageSrc, motivation, backgroundColor } = person;
  return `<el-dialog>
  <dialog id="dialog" class="fixed inset-0 z-[100] size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent">
    <div id="backdrop" class="fixed inset-0 bg-gray-900/50 transition-opacity flex items-center justify-center">
    <div class="relative">
    <button data-close-modal class="absolute -top-14 -left-10 text-white hover:text-gray-300 border-2 border-white/70 cursor-pointer w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10" aria-label="Close modal">
          <i class="fa-solid fa-xmark"></i>
        </button>
    <div class="rounded-lg shadow-lg p-6 max-w-lg" style="background-color: var(--color-${backgroundColor})">

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <h2 class="text-2xl font-bold text-white mb-2">${name} <span class="text-white mb-4 italic">${distance} km</span></h2>
        <img src="${imageSrc}" alt="${name}" class="w-32 h-32 rounded-full mb-4 object-cover border-4 border-white/70">
        <p class="text-white text-center max-w-md">${motivation}</p>
      </div>
    </div>
    </div>
    </div>

    
  </dialog>
</el-dialog>`;
}
