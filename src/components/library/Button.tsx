import { MouseEvent } from "react";

import { AnchorTargetType, IGaEvent } from "../../types";
import { trackGaEvent } from "../../utils";

type PropsType = {
  gaEvent?: IGaEvent;
  href?: string;
  label: string;
  onClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
  rel?: string;
  target?: AnchorTargetType;
  variant?: keyof typeof variants;
};

const variants = {
  primary: "bg-primary-default text-white",
  exophase: "bg-[#212121] text-[#00a2d2]",
  facebook: `bg-[#3b5998] text-white`,
  github: "bg-[#24292e] text-[#eee]",
  goodreads: "bg-[#e3dfc9] text-[#382110]",
  instagram: "bg-[#b900b4] text-white",
  letterboxd: "bg-[#14181c] text-[#9ab]",
  linkedin: "bg-[#2e8dd7] text-white",
  mastodon: "bg-[#6d6eff] text-white",
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
  rel,
  variant = "primary",
  target,
}: PropsType) {
  const className = `inline-block cursor-pointer rounded-lg py-1 px-2 font-semibold shadow-md shadow-layer-2-dark/50 transition duration-300 [text-shadow:_0_-1px_0_rgb(0_0_16_/_50%)] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-layer-2-dark/50 active:translate-y-0 active:shadow-none ${variants[variant]}`;

  const handleClick = () => {
    if (gaEvent) {
      trackGaEvent(gaEvent);
    }
    if (onClick) {
      onClick();
    }
  };

  if (href && !onClick) {
    const attrRel =
      [
        ...(rel ? [rel] : []),
        ...(target === "_blank" ? ["noopener", "noreferrer"] : []),
      ].join(" ") || undefined;
    return (
      <a
        className={className}
        href={href}
        onClick={handleClick}
        rel={attrRel}
        target={target}
      >
        {label}
      </a>
    );
  }

  if (onClick && !href) {
    return (
      <button className={className} onClick={handleClick} type="button">
        {label}
      </button>
    );
  }

  throw new Error(
    "href or onClick prop (and only one of them) needs to be present"
  );
}

export default Button;
export { variantKeys, variants };
