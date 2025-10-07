export interface CheckPointProps {
  id: string;
  color?: string;
  label?: string;
}

export default function CheckPoint({
  id,
  color = "var(--color-t-pink)",
  label = "KM",
}: CheckPointProps): string {
  const uniqueId = id.replace("m", ""); // '25', '50', '75'

  return `
    <div id="${id}" class="checkpoint">
      <svg class="checkpoint-svg" viewBox="0 0 117 92" aria-hidden="true">
        <defs>
          <filter id="plateShadow${uniqueId}" x="0" y="0" width="117" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend in="SourceGraphic" result="shape"/>
          </filter>
          <filter id="postShadow${uniqueId}" x="53" y="44" width="18" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="4" dy="2"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend in="SourceGraphic" result="shape"/>
          </filter>
        </defs>
        <g class="sign">
          <g filter="url(#plateShadow${uniqueId})">
            <rect x="4" y="0" width="109" height="46" rx="8" fill="${color}" shape-rendering="crispEdges"/>
            <rect x="6" y="2" width="105" height="42" rx="6" stroke="${color}" stroke-width="4" fill="none" shape-rendering="crispEdges"/>
          </g>
          <g filter="url(#postShadow${uniqueId})">
            <path d="M58 46V86" stroke="${color}" stroke-width="10"/>
          </g>
          <text class="label" x="50%" y="30" font-family="Inter, system-ui, sans-serif" font-weight="700" fill="var(--color-paper)" text-anchor="middle" dominant-baseline="middle">${label}</text>
        </g>
      </svg>
    </div>
  `;
}
