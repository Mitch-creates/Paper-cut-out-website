export interface GroupSectionProps {
  groupImageSrc: string;
  title: string;
  subtitle?: string;
  groupNumber?: number;
}

export function GroupSection({
  groupImageSrc,
  title,
  subtitle,
}: GroupSectionProps): string {
  return `
    <section class="hero-section min-h-screen flex items-center justify-center relative overflow-hidden">
      <!-- Background paper texture -->
      <div class="absolute inset-0 bg-paper"></div>
      
      <!-- Group photo with paper cut effect -->
      <div class="hero-content text-center z-10">
        <div class="group-photo-container mb-8">
          <img 
            src="${groupImageSrc}" 
            alt="Group Photo" 
            class="group-photo w-96 h-64 object-cover rounded-lg shadow-paper border-4 border-white transform rotate-1"
          />
        </div>
        <h1 class="text-5xl font-bold text-ink mb-4">${title}</h1>
        ${subtitle ? `<p class="text-xl text-ink/70">${subtitle}</p>` : ""}
      </div>
    </section>
  `;
}
