export interface DonateButtonProps {
  text: string;
  href: string;
  color?: "normal" | "inverted";
  target?: "_blank" | "_self";
  onClick?: () => void;
}

export default function DonateButton({
  text,
  href,
  color = "normal",
  target = "_blank",
  onClick,
}: DonateButtonProps) {
  const colorStyles = {
    normal: "bg-white hover:bg-t-pink text-t-pink hover:text-white",
    inverted: "bg-t-pink hover:bg-white text-white hover:text-t-pink",
  };
  return `
    <a
      href="${href}"
      target="${target}"
      rel="${target === "_blank" ? "noopener noreferrer" : ""}"
      class="inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 
            ${colorStyles[color]}"
      onclick="${onClick ? "event.preventDefault();" : ""}"
    >
      ${text}
    </a>
  `;
}
