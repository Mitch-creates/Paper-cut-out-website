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


<div class="h-[500vh] w-full">
    <section class="scroll-line-section fixed top-0 left-0 w-full h-full text-center overflow-hidden pointer-events-none">

  <svg id="svg-guide" viewBox="0 0 1285 2100" class="inline-block h-full" fill="none" preserveAspectRatio="xMidYMax meet">
<path id="guide" d="M596.757 0C585.818 181.864 786.116 232.711 825.193 216.57C864.27 200.429 955.632 205.653 1053.63 216.57C1151.63 227.487 1258.23 262.044 1274.14 317.672C1290.06 373.3 1291.48 428.13 1241.79 457.086C1192.1 486.042 1044.68 466.5 990.908 534.242C937.137 601.985 765.319 521.117 654.196 457.086C543.073 393.055 365.52 435.934 277.872 505.508C190.223 575.082 246.314 646.354 109.516 631.087C-27.2819 615.82 1.96482 831.831 7.20072 909.449C12.4366 987.066 13.6411 992.285 78.165 1043.74C142.689 1095.19 310.732 1110.78 355.117 995.585C399.503 880.387 604.02 900.336 604.02 900.336C604.02 900.336 1099.06 885.127 990.908 981.218C882.76 1077.31 1032.63 1236.67 1123.61 1185.55C1214.59 1134.43 1282.46 1209.34 1251.57 1290.77C1220.69 1372.19 1301.84 1354.69 1279.56 1410.63C1242.96 1502.55 1154.12 1531.78 1123.61 1454.8C1093.1 1377.82 927.238 1344.38 827.174 1426.6C727.109 1508.81 628.796 1450.33 405.954 1410.63C183.112 1370.94 102.153 1518.75 83.1625 1542.3C64.1721 1565.86 -31.2799 1652.04 64.1721 1726.7C159.624 1801.36 306.642 1741.86 280.563 1837.44C254.485 1933.02 309.549 2043.88 490.957 1859.48C672.366 1675.09 654.875 2100 654.875 2100" stroke="#F5A500" stroke-width="5"/>
</svg>
</section>
</div>
<section class="one">
<h1 class="scroll flex justify-center" data-rate=".4" data-direction="vertical"> Test </h1>
</section>

<svg width="1440" height="2100" viewBox="0 0 1440 2100" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_28_2)">
<rect width="1440" height="2100" fill="white"/>
<path d="M668.66 0C656.382 181.865 891 235 943.5 240.5C996 246 1071.45 205.653 1181.44 216.57C1291.43 227.487 1374.76 237.372 1392.63 293C1410.49 348.628 1400.27 437.044 1344.5 466C1288.73 494.956 1171.39 466.5 1111.04 534.242C1050.69 601.985 858.61 661.031 733.889 597C609.168 532.969 409.127 435.934 310.753 505.508C212.378 575.082 342.038 698.767 188.5 683.5C34.9619 668.233 30.6234 836.382 36.5 914C42.3766 991.618 116.08 929.766 188.5 981.218C260.92 1032.67 347.633 1110.78 397.451 995.585C447.268 880.387 676.811 900.336 676.811 900.336C676.811 900.336 1232.42 885.127 1111.04 981.218C989.661 1077.31 1157.87 1236.67 1259.99 1185.55C1362.1 1134.43 1438.27 1209.34 1403.61 1290.77C1368.94 1372.19 1428.61 1370.65 1403.61 1426.6C1362.53 1518.52 1294.23 1531.78 1259.99 1454.8C1225.74 1377.82 1039.58 1344.38 927.272 1426.6C814.963 1508.81 508.5 1087 454.508 1410.63C400.517 1734.27 177.783 1572.7 118 1564C58.2167 1555.3 10.8676 1675.34 118 1750C225.132 1824.66 343.043 1741.86 313.773 1837.44C284.503 1933.02 346.306 2043.88 549.913 1859.48C753.521 1675.09 733.889 2100 733.889 2100" stroke="black"/>
</g>
<defs>
<clipPath id="clip0_28_2">
<rect width="1440" height="2100" fill="white"/>
</clipPath>
</defs>
</svg>


</section>
    
    <!-- Footer -->
    <footer class="bg-ink text-paper pt-10 md:pt-16 text-center z-10">
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
