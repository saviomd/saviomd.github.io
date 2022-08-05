import { ElementType, MouseEvent } from "react";

import { AnchorTargetType, IGaEvent } from "../../types";
import { trackGaEvent } from "../../utils";

type PropsType = {
  gaEvent?: IGaEvent;
  href?: string;
  label: string;
  onClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
  target?: AnchorTargetType;
  variant?: keyof typeof variants;
};

const variants = {
  primary: "bg-primary-default text-white",
  facebook: `bg-[#3b5998] text-white`,
  github: "bg-[#24292e] text-[#eee]",
  goodreads: "bg-[#e3dfc9] text-[#382110]",
  instagram: "bg-[#b900b4] text-white",
  letterboxd: "bg-[#14181c] text-[#9ab]",
  linkedin: "bg-[#2e8dd7] text-white",
  pinterest: "bg-[#c72527] text-white",
  spotify: "bg-[#000] text-[#1db954]",
  trueachievements: "bg-[#000] text-[#baff00]",
  twitter: "bg-[#2298f0] text-white",
  unsplash: "bg-[#111] text-white",
  xbox: "bg-[#107c10] text-white",
};
const variantKeys = Object.keys(variants);

function Button({
  gaEvent,
  href,
  label,
  onClick,
  variant = "primary",
  target,
}: PropsType) {
  const ButtonTag: ElementType = href ? "a" : "button";
  const handleClick = () => {
    if (gaEvent) {
      trackGaEvent(gaEvent);
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <ButtonTag
      className={`inline-block cursor-pointer rounded-lg py-1 px-2 font-semibold text-white shadow-inner transition duration-300 [text-shadow:_0_-1px_0_rgb(0_0_16_/_50%)] hover:shadow-md ${variants[variant]}`}
      href={href}
      onClick={handleClick}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      target={target}
    >
      {label}
    </ButtonTag>
  );
}

export default Button;
export { variantKeys, variants };
