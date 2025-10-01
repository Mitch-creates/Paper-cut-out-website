import "./style.css";
import {
  setupScrollAnimations,
  animateScrollLine,
} from "./animations/scrollAnimations";
import DonateButton from "./components/DonateButton";

// Create the main page structure
function createMainHTML(): string {
  return `
    <!-- Hero Section with Group Photo -->
    <section class="hero-section min-h-screen relative overflow-hidden">
      <div class="absolute inset-0"></div>
      <div class="relative z-10 flex items-center justify-center min-h-screen">
        <div class="text-center space-y-6 md:space-y-8 p-4 md:p-8">
          <div id="group-photo-container" class="group-photo-container invisible mb-6 md:mb-8">
            <img 
              src="/images/Groepsfoto.jpg" 
              alt="Our Amazing Team"
              id="hero-image"
              class="w-auto h-64 md:h-96 mx-auto rounded-xl md:rounded-2xl shadow-paper border-2 md:border-4 border-white"
            />
          </div>
          
          <!-- Hero Title -->
          <h1 class="text-4xl md:text-6xl font-bold text-ink mb-3 md:mb-4">Team naam 1</h1>
          <p class="text-xl md:text-2xl text-ink/70 max-w-2xl mx-auto leading-relaxed px-4">
            Ons motto tekstje?
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
     class="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center invisible">
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
<path id="guide-dotted" d="M663.598 0C650.759 181.865 878 264 950.995 240.5C1023.99 217 1084.79 205.653 1199.8 216.57C1314.82 227.487 1401.96 237.372 1420.64 293C1439.32 348.628 1428.63 437.044 1370.32 466C1312 494.956 1189.3 466.5 1126.19 534.242C1063.08 601.985 880 757 731.808 597C583.616 437 392.207 435.934 289.339 505.508C186.47 575.082 322.054 698.767 161.501 683.5C0.947937 668.233 -3.58881 836.382 2.55629 914C8.7014 991.618 85.7725 929.766 161.501 981.218C237.229 1032.67 327.905 1110.78 379.998 995.585C432.091 880.387 656.244 707.673 672.122 900.336C688 1093 1037.5 981.218 1126.19 981.218C1214.89 981.218 1175.16 1236.67 1281.94 1185.55C1388.72 1134.43 1468.37 1209.34 1432.12 1290.77C1395.88 1372.19 1458.27 1370.65 1432.12 1426.6C1389.17 1518.52 1317.75 1531.78 1281.94 1454.8C1246.13 1377.82 883.552 1632.69 934.026 1426.6C984.5 1220.5 616 1148.5 439.663 1410.63C263.325 1672.77 150.295 1572.7 87.7799 1564C25.2652 1555.3 -24.2472 1675.34 87.7799 1750C199.807 1824.66 323.105 1741.86 292.497 1837.44C261.89 1933.02 326.516 2043.88 539.426 1859.48C752.336 1675.09 731.808 2100 731.808 2100" stroke="#F5A500" stroke-width="8" stroke-linecap="round" stroke-dasharray="10 10"/>
<path id="guide-cover" d="M663.598 0C650.759 181.865 878 264 950.995 240.5C1023.99 217 1084.79 205.653 1199.8 216.57C1314.82 227.487 1401.96 237.372 1420.64 293C1439.32 348.628 1428.63 437.044 1370.32 466C1312 494.956 1189.3 466.5 1126.19 534.242C1063.08 601.985 880 757 731.808 597C583.616 437 392.207 435.934 289.339 505.508C186.47 575.082 322.054 698.767 161.501 683.5C0.947937 668.233 -3.58881 836.382 2.55629 914C8.7014 991.618 85.7725 929.766 161.501 981.218C237.229 1032.67 327.905 1110.78 379.998 995.585C432.091 880.387 656.244 707.673 672.122 900.336C688 1093 1037.5 981.218 1126.19 981.218C1214.89 981.218 1175.16 1236.67 1281.94 1185.55C1388.72 1134.43 1468.37 1209.34 1432.12 1290.77C1395.88 1372.19 1458.27 1370.65 1432.12 1426.6C1389.17 1518.52 1317.75 1531.78 1281.94 1454.8C1246.13 1377.82 883.552 1632.69 934.026 1426.6C984.5 1220.5 616 1148.5 439.663 1410.63C263.325 1672.77 150.295 1572.7 87.7799 1564C25.2652 1555.3 -24.2472 1675.34 87.7799 1750C199.807 1824.66 323.105 1741.86 292.497 1837.44C261.89 1933.02 326.516 2043.88 539.426 1859.48C752.336 1675.09 731.808 2100 731.808 2100" stroke="#f5f2ea" stroke-width="9" stroke-linecap="round"/>
</svg>
</section>
</div>


    <!-- Footer -->
    <footer class="bg-ink text-paper pt-10 md:pt-16 text-center z-20 relative">
    <div class="container mx-auto px-4">
    <div class="flex flex-col md:flex-row items-center">
      <div class="md:w-1/4 flex justify-center md:justify-start mb-6 md:mb-0 md:pl-16">
        <img 
          src="images/logo Kom op tegen Kanker verticaal.jpg" 
          alt="Logo" 
          class="h-28 md:h-40 w-auto"
        />
      </div>
      
      <div class="md:w-2/4 text-center px-4">
        <h2 class="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Klaar om <span class="text-ktk">Kom op tegen kanker</span> te steunen?</h2>
        <div id="donate-target">
        ${DonateButton({
          text: "DOE EEN GIFT <i id='donate-icon' class='fa-solid animate-bounce fa-heart ml-2'></i>",
          color: "inverted",
          href: "https://google.com",
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
