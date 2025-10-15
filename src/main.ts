import "./style.css";
import {
  setupScrollAnimations,
  animateScrollLine,
} from "./animations/scrollAnimations";
import DonateButton from "./components/DonateButton";
import CheckPoint from "./components/CheckPoint";
import ModalScreen from "./components/ModalScreen";

function createMainHTML(): string {
  return `
    <!-- Hero Section with Group Photo -->
    <section class="hero-section min-h-screen relative overflow-hidden">
      <div class="absolute inset-0"></div>
      <div class="relative z-10 flex items-center justify-center min-h-screen">
        <div class="text-center space-y-6 md:space-y-8 p-4 md:p-8">
        <div class="hidden md:block mb-6 md:mb-8 absolute top-20 text-left left-10 z-20">
         

         <h1 class="text-6xl font-bold text-ink mb-2">LEDs Run</h1>
          <p class="text-2xl text-ink/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            Actienummer: 340183185
          </p>
          <div class="flex justify-center">
          ${DonateButton({
            text: "DOE EEN GIFT <i id='donate-icon' class='fa-solid fa-heart ml-2 text-3xl md:text-4xl'></i>",
            color: "normal_red",
            href: "https://www.komoptegenkanker.be/actie/code/340183185",
          })}
          </div>
         </div>
         <div class="md:hidden mb-6 md:mb-8">
         ${DonateButton({
           text: "DOE EEN GIFT <i id='donate-icon' class='fa-solid fa-heart ml-2 text-3xl md:text-4xl'></i>",
           color: "normal_red",
           href: "https://www.komoptegenkanker.be/actie/code/340183185",
         })}
          </div>

          <div id="group-photo-container" class="group-photo-container invisible mb-6 md:mb-8">
            <img 
              src="/images/Groepsfoto.jpg" 
              alt="Het Led's Run Team bij Signify"
              id="hero-image"
              class="w-auto h-64 md:h-128 mx-auto rounded-xl md:rounded-2xl shadow-xl"
            />
          </div>
          
          <!-- Hero Title -->
          <h1 class="hidden text-4xl md:text-6xl font-bold text-ink mb-3 md:mb-4">LEDs Run</h1>
          <p class="hidden text-xl md:text-2xl text-ink/70 max-w-2xl mx-auto leading-relaxed px-4">
            Actienummer: 340183185
          </p>
         
          <!-- Scroll Indicator -->
          <div class="mt-10 md:mt-16 relative h-100% w-100%">
            <div id="scroll-mouse" class="scroll-mouse mx-auto">
              <div id="scroll-wheel" class="w-6 md:w-8 h-10 md:h-12 border-2 border-ink/30 rounded-full mx-auto relative">
                <div class="w-1 h-2 md:h-3 bg-ink/50 rounded-full absolute left-1/2 top-2 transform -translate-x-1/2 "></div>
              </div>
              <p class="text-sm md:text-base text-ink/50 mt-2">Scroll verder!</p>
            </div>
            <div id="scroll-line" class="scroll-line rounded-full top-2 absolute left-1/2 -translate-x-1/2 w-1 h-3 opacity-0 text-ink/50"></div>
          </div>
        </div>
      </div>
      <!-- READY, SET, GO! -->
      <div id="scroll-words"
     class="fixed inset-0 z-[90] pointer-events-none flex items-center justify-center invisible">
  <div id="scroll-words-text"
       class="select-none font-extrabold tracking-tight
              text-4xl md:text-6xl text-ink/90">
    READY
  </div>
</div>
    </section>


<div class= "h-[500vh] w-full">
    <section class="scroll-line-section fixed top-0 left-0 w-full h-full text-center overflow-hidden">

  <svg id="svg-guide" viewBox="0 0 1285 2100" class="block h-full w-full pointer-events-none" fill="none" preserveAspectRatio="xMidYMax meet">
<path id="guide-dotted" d="M663.598 0C650.759 181.865 878 264 950.995 240.5C1023.99 217 1084.79 205.653 1199.8 216.57C1314.82 227.487 1401.96 237.372 1420.64 293C1439.32 348.628 1428.63 437.044 1370.32 466C1312 494.956 1189.3 466.5 1126.19 534.242C1063.08 601.985 880 757 731.808 597C583.616 437 392.207 435.934 289.339 505.508C186.47 575.082 322.054 698.767 161.501 683.5C0.947937 668.233 -3.58881 836.382 2.55629 914C8.7014 991.618 85.7725 929.766 161.501 981.218C237.229 1032.67 327.905 1110.78 379.998 995.585C432.091 880.387 656.244 707.673 672.122 900.336C688 1093 1037.5 981.218 1126.19 981.218C1214.89 981.218 1175.16 1236.67 1281.94 1185.55C1388.72 1134.43 1468.37 1209.34 1432.12 1290.77C1395.88 1372.19 1458.27 1370.65 1432.12 1426.6C1389.17 1518.52 1317.75 1531.78 1281.94 1454.8C1246.13 1377.82 883.552 1632.69 934.026 1426.6C984.5 1220.5 616 1148.5 439.663 1410.63C263.325 1672.77 150.295 1572.7 87.7799 1564C25.2652 1555.3 -24.2472 1675.34 87.7799 1750C199.807 1824.66 323.105 1741.86 292.497 1837.44C261.89 1933.02 326.516 2043.88 539.426 1859.48C752.336 1675.09 731.808 2100 731.808 2100" stroke="var(--color-t-brightyellow)" style="stroke-width: var(--stroke-w); stroke-dasharray: var(--dash) var(--gap); stroke-linecap: round"/>

<path id="guide-dotted-mobile"
            class="hidden" d="M190.19 0C259.217 47.7355 288.142 128.139 288.142 128.139C288.142 128.139 309.42 152.941 222.253 200.994C135.086 249.048 59.5862 288.834 69.1951 350.839C78.804 412.844 -51.6033 401.476 222.253 477.949C496.108 554.422 124.79 553.905 288.142 608.676C451.495 663.447 371.191 760.071 257.943 758.521C144.694 756.97 54.0954 783.839 32.8184 831.376C11.5413 878.913 -28.9536 1011.71 32.8184 1046.84C94.5903 1081.98 165.971 1000.34 222.253 1023.59C278.534 1046.84 297.751 1046.84 344.423 1123.83C391.096 1200.82 362.955 1260.76 314.224 1281.43C265.493 1302.1 276.475 1228.72 222.253 1250.42C168.03 1272.13 -24.8355 1281.43 32.8184 1338.78C90.4722 1396.14 -7.67653 1447.29 32.8184 1515.5C73.3132 1583.7 159.794 1623.49 222.253 1565.62C284.711 1507.74 437.768 1588.87 375.31 1680.84C312.851 1772.82 435.14 1771.35 344.423 1846.19C283.913 1871.31 247.02 1870.97 176.267 1846.19C58.3547 1829.15 17.8662 1839.09 32.8184 1923.18C37.5832 1968.07 52.5707 2008.46 89.0995 2046.15C125.628 2083.84 180.11 1968.65 176.267 2227"
            stroke="var(--color-t-brightyellow)"
            style="stroke-width: var(--stroke-w);
                   stroke-dasharray: var(--dash) var(--gap);
                   stroke-linecap: round" />

<path id="guide-cover" d="" stroke="var(--color-t-lightblue)" style="stroke-width: calc(var(--stroke-w) + 2px); stroke-linecap: round"/>
</svg>


${CheckPoint({ id: "m25", color: "var(--color-t-pink)", label: "10 KM" })}
${CheckPoint({ id: "m50", color: "var(--color-t-pink)", label: "20 KM" })}
${CheckPoint({ id: "m75", color: "var(--color-t-pink)", label: "30 KM" })}


<a class="cursor-pointer hidden" id="runner1" data-runner="1A"><i id="runner" class="fa-solid fa-person-running fa-3x text-t-pink"></i> </a>
<a class="cursor-pointer hidden" id="runner2" data-runner="2A"><i id="runner" class="fa-solid fa-person-running fa-3x text-t-pink"></i> </a>
<a class="cursor-pointer hidden" id="runner3" data-runner="3A"><i id="runner" class="fa-solid fa-person-running fa-3x text-t-pink"></i> </a>
<a class="cursor-pointer hidden" id="runner4" data-runner="4A"><i id="runner" class="fa-solid fa-person-running fa-3x text-t-pink"></i> </a>
<a class="cursor-pointer hidden" id="runner5" data-runner="1B"><i id="runner" class="fa-solid fa-person-running fa-3x text-t-pink"></i> </a>
<a class="cursor-pointer hidden" id="runner6" data-runner="2B"><i id="runner" class="fa-solid fa-person-running fa-3x text-t-pink"></i> </a>
<a class="cursor-pointer hidden" id="runner7" data-runner="3B"><i id="runner" class="fa-solid fa-person-running fa-3x text-t-pink"></i> </a>
<a class="cursor-pointer hidden" id="runner8" data-runner="4B"><i id="runner" class="fa-solid fa-person-running fa-3x text-t-pink"></i> </a>
${ModalScreen({
  person: {
    name: "Annelies",
    distance: "20",
    imageSrc: "images/granit.png",
    motivation:
      "Ik loop heel graag, ik heb speciaal voor deze loop nieuwe loopschoenen aangeschaft, let's get it on!",
    backgroundColor: "t-pink",
  },
})}
</section>
</div>




    <!-- Footer -->
    <footer class="bg-t-purple text-paper pt-10 md:pt-16 text-center z-30 relative">
    <div class="container mx-auto px-4">
    <div class="flex flex-col md:flex-row items-center">
      <div class="md:w-1/4 flex justify-center md:justify-start mb-6 md:mb-0 md:pl-16">
        <img 
          src="images/transparent_ktk_logo.png" 
          alt="Logo" 
          class="h-28 md:h-40 w-auto "
        />
      </div>
      
      <div class="md:w-2/4 text-center px-4">
        <h2 class="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Klaar om <span class="text-t-brightyellow">Kom op tegen kanker</span> te steunen?</h2>
        <div id="donate-target">
        ${DonateButton({
          text: "DOE EEN GIFT <i id='donate-icon' class='fa-solid animate-bounce fa-heart ml-2 text-3xl md:text-4xl'></i>",
          color: "inverted",
          href: "https://www.komoptegenkanker.be/actie/code/340183185",
        })}
        </div>
      </div>
    
      <div class="md:w-1/4"></div>
    </div>

    <div class="mt-6 md:mt-8 text-center text-paper/70 pb-4 md:pb-0">
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
  animateScrollLine();
}, 100);

function setupModalHandlers() {
  // Handle runner clicks
  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    const runnerLink = target.closest("[data-runner]") as HTMLElement;

    if (runnerLink) {
      e.preventDefault();
      const runnerId = runnerLink.getAttribute("data-runner");
      showModal(runnerId);
    }
  });

  // Handle modal close
  const modal = document.getElementById("dialog");
  const backdrop = modal?.querySelector("#backdrop");
  const closeButton = modal?.querySelector("[data-close-modal]");

  if (closeButton) {
    closeButton.addEventListener("click", closeModal);
  }

  // Close on overlay click
  backdrop?.addEventListener("click", closeModal);

  // Close on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });
}

function showModal(runnerId: string | null) {
  const modal = document.getElementById("dialog");
  if (!modal || !runnerId) return;

  // Update modal content based on runner
  const modalTitle = modal.querySelector("h2");
  const modalContent = modal.querySelector(".modal-content");

  if (modalTitle) {
    modalTitle.textContent = `Runner ${runnerId}`;
  }

  // Show modal
  modal.classList.remove("invisible");
  modal.classList.add("flex");

  // Prevent body scroll
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("dialog");
  if (!modal) return;

  modal.classList.add("invisible");
  modal.classList.remove("flex");

  // Restore body scroll
  document.body.style.overflow = "";
}

// Setup everything
setupModalHandlers();
