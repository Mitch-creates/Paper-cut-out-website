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
    normal: "bg-ktk hover:bg-white text-white hover:text-ktk",
    inverted: "bg-white hover:bg-ktk text-ktk hover:text-white",
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
