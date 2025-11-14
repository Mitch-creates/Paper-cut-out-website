import type { Person } from "../data/people";

export interface ModalScreenProps {
  person: Person;
}

export default function ModalScreen({ person }: ModalScreenProps): string {
  const { name, distance, imageSrc, motivation, backgroundColor } = person;
  return `<dialog id="dialog" class="fixed inset-0 z-[100] size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent">
    <div id="backdrop" class="fixed inset-0 bg-gray-900/50 transition-opacity flex items-center justify-center backdrop-blur-xs"></div>
    <div class="fixed inset-0 flex items-center justify-center p-4 pointer-events-none">
    <div class="relative pointer-events-auto">
    <button data-close-modal class="absolute -top-14 md:-left-10 text-white hover:text-gray-300 border-2 border-white/70 cursor-pointer w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10" aria-label="Close modal">
          <i class="fa-solid fa-xmark"></i>
        </button>
    <div class="rounded-2xl shadow-lg p-6 max-w-lg md:max-w-2xl" style="background-color: var(--color-${backgroundColor})">
          <!-- Mobile Layout: Image top, text bottom -->
          <div class="flex flex-col items-center gap-4 md:hidden">
          <div class="relative w-50 h-50">
          <!-- Loading spinner -->
              <div id="image-loader-mobile" class="absolute inset-0 flex items-center justify-center">
                <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
              </div>
            <img src="${imageSrc}" alt="${name}" class="w-50 h-50 rounded-full object-cover opacity-0 transition-opacity duration-300"
                onload="this.style.opacity='1'; document.getElementById('image-loader-mobile').style.display='none';">
            </div>
            <div class="text-center">
              <h2 class="text-2xl font-bold text-white">${name.toUpperCase()}</h2>
              <p class="text-white mb-4 text-lg italic">${distance} km</p>
              <p class="text-white text-sm leading-relaxed">${motivation}</p>
            </div>
          </div>
          
          <!-- Desktop Layout: Text left, image right -->
          <div class="hidden md:flex items-start gap-8">
            <div class="flex-1 text-left">
              <h2 class="text-3xl font-bold text-white">${name.toUpperCase()}</h2>
              <p class="text-white mb-4 text-xl italic">${distance} km</p>
              <p class="text-white text-lg leading-relaxed max-w-md">${motivation}</p>
            </div>
            <div class="flex-shrink-0 relative">
              <!-- Loading spinner -->
              <div id="image-loader-desktop" class="absolute inset-0 flex items-center justify-center w-50 h-50">
                <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
              </div>
              <!-- Actual image -->
              <img 
                src="${imageSrc}" 
                alt="${name}" 
                class="w-50 h-50 rounded-full object-coveropacity-0 transition-opacity duration-300"
                onload="this.style.opacity='1'; document.getElementById('image-loader-desktop').style.display='none';"
              >
            </div>
          </div>
        </div>
    </div>
    </div>

    
  </dialog>`;
}
