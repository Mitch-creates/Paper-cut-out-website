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
    normal: "bg-white hover:bg-t-wine text-t-wine hover:text-white",
    inverted: "bg-t-wine hover:bg-white text-white hover:text-t-wine",
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
