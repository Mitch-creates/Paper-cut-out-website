export interface DonateButtonProps {
  text: string;
  href: string;
  color?: "normal" | "inverted" | "normal_red";
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
    normal_red: "bg-white hover:bg-t-red text-t-red hover:text-white",
  };
  return `
    <a
      href="${href}"
      target="${target}"
      rel="${target === "_blank" ? "noopener noreferrer" : ""}"
      class="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-lg shadow-${
        colorStyles[color]
      } ${colorStyles[color]}"
      onclick="${onClick ? "event.preventDefault();" : ""}"
    >
      ${text}
    </a>
  `;
}
