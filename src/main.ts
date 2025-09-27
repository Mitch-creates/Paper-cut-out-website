import "./style.css";
import { getGroup1People } from "./data/people";
import { PersonCard } from "./components/Person";
import { setupScrollAnimations } from "./animations/scrollAnimations";
import DonateButton from "./components/DonateButton";

// Create the main page structure
function createMainHTML(): string {
  return `
    <!-- Hero Section with Group Photo -->
    <section class="hero-section min-h-screen relative overflow-hidden">
      <div class="absolute inset-0"></div>
      <div class="relative z-10 flex items-center justify-center min-h-screen">
        <div class="text-center space-y-8 p-8">
          <div id="group-photo-container" class="group-photo-container invisible mb-8">
            <img 
              src="/images/Dummy_Group_Picture.jpg" 
              alt="Our Amazing Team"
              id="hero-image"
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

    <!-- READY, SET, GO! -->
<div id="scroll-words"
     class="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center invisible">
  <div id="scroll-words-text"
       class="select-none font-extrabold tracking-tight
              text-4xl md:text-6xl text-ink/90">
    READY
  </div>
</div>
<div class="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-full overflow-hidden">
    <section class="scrolly relative left-1/2 -translate-x-1/2 h-[2400px]">
  <svg
    id="guide"
    viewBox="0 0 1920 3000"
    preserveAspectRatio="xMidYMid meet"
    class="sticky top-0 block w-screen h-auto pointer-events-none"
  >

    <defs>
      <mask id="reveal">
        <path id="maskPath"
          d="M807.5 0C813.681 361.005 765.145 543.719 476.674 451.256C188.204 358.794 -51.3278 489.447 49.1215 632.161C149.571 774.874 414.859 762.814 445.767 765.829C476.674 768.844 826.963 771.859 1146.34 774.874C1465.72 777.889 1960.23 906.533 1537.83 996.985C1115.43 1087.44 1615.1 1160.8 1465.71 1233.17C1316.33 1305.53 783.177 1335.68 659.546 1345.73C535.915 1355.78 -126.021 1303.52 56.8483 1507.54C239.718 1711.56 -133.748 1679.4 56.8483 1819.1C247.444 1958.79 512.735 1691.46 700.756 1805.03C888.777 1918.59 1285.42 1781.91 1473.44 1866.33C1661.46 1950.75 1857.21 2232.16 1427.08 2160.8C996.951 2089.45 803.782 2152.76 654.395 2283.42C505.008 2414.07 -38.4499 2269.35 54.2726 2414.07C146.995 2558.79 -107.992 2730.65 87.7556 2710.55C283.503 2690.45 561.671 2764.82 700.756 2813.07C839.841 2861.31 830 2997 830 2997"
          fill="none" stroke="white" stroke-width="16" stroke-linecap="round"/>
      </mask>
    </defs>

    <g id="dashGroup" mask="url(#reveal)" class="opacity-0">
      <path id="dashPath"
        d="M807.5 0C813.681 361.005 765.145 543.719 476.674 451.256C188.204 358.794 -51.3278 489.447 49.1215 632.161C149.571 774.874 414.859 762.814 445.767 765.829C476.674 768.844 826.963 771.859 1146.34 774.874C1465.72 777.889 1960.23 906.533 1537.83 996.985C1115.43 1087.44 1615.1 1160.8 1465.71 1233.17C1316.33 1305.53 783.177 1335.68 659.546 1345.73C535.915 1355.78 -126.021 1303.52 56.8483 1507.54C239.718 1711.56 -133.748 1679.4 56.8483 1819.1C247.444 1958.79 512.735 1691.46 700.756 1805.03C888.777 1918.59 1285.42 1781.91 1473.44 1866.33C1661.46 1950.75 1857.21 2232.16 1427.08 2160.8C996.951 2089.45 803.782 2152.76 654.395 2283.42C505.008 2414.07 -38.4499 2269.35 54.2726 2414.07C146.995 2558.79 -107.992 2730.65 87.7556 2710.55C283.503 2690.45 561.671 2764.82 700.756 2813.07C839.841 2861.31 830 2997 830 2997"
        fill="none" stroke="#F5A500" stroke-width="8"
        stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="14 14"/>
    </g>
  </svg>
</section>
</div>
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
        <div id="donate-target">
        ${DonateButton({
          text: "DOE EEN GIFT <i class='fa-regular fa-heart ml-2'></i>",
          color: "inverted",
          href: "https://google.com",
        })}
        </div>
      </div>
    
      <div class="md:w-1/4"></div>
    </div>

    <div class="mt-8 text-center text-paper/70">
      &copy; <a href="https://mitchcreates.info/"><span class="underline">MitchCreates</span> 2025</a>
    </div>
  </div>
    </footer>
  `;
}

// Initialize the app
document.querySelector<HTMLDivElement>("#app")!.innerHTML = createMainHTML();

const heroImage = document.getElementById("hero-image") as HTMLImageElement;
const groupPhotoContainer = document.getElementById(
  "group-photo-container"
) as HTMLElement;
if (heroImage.complete) {
  groupPhotoContainer.classList.remove("invisible");
} else {
  // Otherwise wait for load event
  heroImage.onload = () => {
    groupPhotoContainer.classList.remove("invisible");
  };
}

// Setup animations after DOM is loaded
setTimeout(() => {
  setupScrollAnimations();
}, 100);
