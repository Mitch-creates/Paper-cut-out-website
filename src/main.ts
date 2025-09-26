import "./style.css";
import { getGroup1People } from "./data/people";
import { PersonCard } from "./components/Person";
import { setupScrollAnimations } from "./animations/scrollAnimations";
import DonateButton from "./components/DonateButton";

// Create the main page structure
function createMainHTML(): string {
  return `
    <!-- Hero Section with Group Photo -->
    <section class="hero-section min-h-scree relative overflow-hidden">
      <div class="absolute inset-0"></div>
      <div class="relative z-10 flex items-center justify-center min-h-screen">
        <div class="text-center space-y-8 p-8">
          <div class="group-photo-container mb-8">
            <img 
              src="/images/Dummy_Group_Picture.jpg" 
              alt="Our Amazing Team" 
              class="w-auto h-96 mx-auto rounded-2xl shadow-paper border-4 border-white"
            />
          </div>
          
          <!-- Hero Title -->
          <h1 class="text-6xl font-bold text-ink mb-4">Team naam 1</h1>
          <p class="text-2xl text-ink/70 max-w-2xl mx-auto leading-relaxed">
            Ons motto tekstje?
          </p>
          
          <!-- Scroll Indicator -->
          <div class="mt-16 relative h-100% w-100%">
            <div id="scroll-mouse" class="scroll-mouse mx-auto">
              <div id="scroll-wheel" class="w-8 h-12 border-2 border-ink/30 rounded-full mx-auto relative">
                <div class="w-1 h-3 bg-ink/50 rounded-full absolute left-1/2 top-2 transform -translate-x-1/2 "></div>
              </div>
              <p class="text-ink/50 mt-2">Scroll verder!</p>
            </div>
            <div id="scroll-line" class="scroll-line rounded-full top-2 absolute left-1/2 -translate-x-1/2 w-1 h-3 opacity-0 text-ink/50"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="scrolly relative h-[220vh] bg-paper">
  <svg id="guide" viewBox="0 0 332 1493" aria-hidden="true"
       class="sticky top-0 h-screen w-auto left-1/2 -translate-x-1/2 block overflow-visible pointer-events-none">
    <defs>
      <mask id="reveal">
        <path id="maskPath"
          d="M142.342 0C143.542 179.6 149.342 270.5 93.3416 224.5C37.3415 178.5 -9.15828 243.5 10.3417 314.5C29.8417 385.5 81.3416 379.5 87.3416 381C93.3416 382.5 161.342 384 223.342 385.5C285.342 387 381.342 451 299.342 496C217.342 541 314.342 577.5 285.342 613.5C256.342 649.5 152.842 664.5 128.842 669.5C104.842 674.5 -23.6583 648.5 11.8417 750C47.3417 851.5 -25.1583 835.5 11.8417 905C48.8417 974.5 100.342 841.5 136.842 898C173.342 954.5 250.342 886.5 286.842 928.5C323.342 970.5 361.342 1110.5 277.842 1075C194.342 1039.5 156.842 1071 127.842 1136C98.8419 1201 -6.65831 1129 11.3417 1201C29.3417 1273 -20.1583 1358.5 17.8417 1348.5C55.8417 1338.5 109.842 1375.5 136.842 1399.5C163.842 1423.5 148.342 1492.5 148.342 1492.5"
          fill="none" stroke="white" stroke-width="16" stroke-linecap="round"/>
      </mask>
    </defs>

    <g mask="url(#reveal)">
      <path id="dashPath"
        d="M142.342 0C143.542 179.6 149.342 270.5 93.3416 224.5C37.3415 178.5 -9.15828 243.5 10.3417 314.5C29.8417 385.5 81.3416 379.5 87.3416 381C93.3416 382.5 161.342 384 223.342 385.5C285.342 387 381.342 451 299.342 496C217.342 541 314.342 577.5 285.342 613.5C256.342 649.5 152.842 664.5 128.842 669.5C104.842 674.5 -23.6583 648.5 11.8417 750C47.3417 851.5 -25.1583 835.5 11.8417 905C48.8417 974.5 100.342 841.5 136.842 898C173.342 954.5 250.342 886.5 286.842 928.5C323.342 970.5 361.342 1110.5 277.842 1075C194.342 1039.5 156.842 1071 127.842 1136C98.8419 1201 -6.65831 1129 11.3417 1201C29.3417 1273 -20.1583 1358.5 17.8417 1348.5C55.8417 1338.5 109.842 1375.5 136.842 1399.5C163.842 1423.5 148.342 1492.5 148.342 1492.5"
        fill="none" stroke="#F5A500" stroke-width="8"
        stroke-linecap="round" stroke-linejoin="round"
        stroke-dasharray="14 14"/>
    </g>
  </svg>
</section>

    <!-- People Sections -->
    <div class="people-sections">
      ${getGroup1People()
        .map((person, index) => PersonCard({ person, isLeft: index % 2 === 0 }))
        .join("")}
    </div>

    <!-- Footer -->
    <footer class="bg-ink text-paper pt-16 text-center">
    <div class="container mx-auto px-4">
    <div class="flex flex-col md:flex-row items-center">
      <div class="md:w-1/4 flex justify-center md:justify-start mb-8 md:mb-0 md:pl-16">
        <img 
          src="images/logo Kom op tegen Kanker verticaal.jpg" 
          alt="Logo" 
          class="h-40 w-auto"
        />
      </div>
      
      <div class="md:w-2/4 text-center">
        <h2 class="text-3xl font-bold mb-8">Klaar om <span class="text-ktk">Kom op tegen kanker</span> te steunen?</h2>
        ${DonateButton({
          text: "DOE EEN GIFT <i class='fa-regular fa-heart ml-2'></i>",
          color: "inverted",
          href: "https://google.com",
        })}
      </div>
    
      <div class="md:w-1/4"></div>
    </div>

    <div class="mt-12 text-center text-paper/70">
      &copy; <a href="https://mitchcreates.info/"><span class="underline">MitchCreates</span> 2025</a>
    </div>
  </div>
    </footer>
  `;
}

// Initialize the app
document.querySelector<HTMLDivElement>("#app")!.innerHTML = createMainHTML();

// Setup animations after DOM is loaded
setTimeout(() => {
  setupScrollAnimations();
}, 100);
