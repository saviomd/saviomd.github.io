import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ElementType, MouseEvent } from "react";

import type { AnchorTargetType, IGaEvent } from "src/types";
import { trackGaEvent } from "src/utils";

type PropsType = {
  gaEvent?: IGaEvent;
  href?: string;
  icon?: IconDefinition;
  label: string;
  onClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
  rel?: string;
  target?: AnchorTargetType;
  variant?: keyof typeof variants;
};

const variants = {
  primary: "bg-primary-default text-white",
  exophase: "bg-[#212121] text-[#00a2d2]",
  facebook: `bg-[#1877f2] text-white`,
  github: "bg-[#24292f] text-[#eee]",
  goodreads: "bg-[#d6d0c4] text-[#382110]",
  ignplaylist: "bg-[#bf1313] text-[#f6f8f7]",
  instagram: "bg-[#d300c5] text-white",
  letterboxd: "bg-[#14181c] text-[#00c030]",
  linkedin: "bg-[#0a66c2] text-white",
  mastodon: "bg-[#6364ff] text-white",
  pinterest: "bg-[#e60023] text-white",
  setlistfm: "bg-white text-[#85b146]",
  spotify: "bg-[#1db954] text-black",
  threads: "bg-[#101010] text-[#f3f5f7]",
  trueachievements: "bg-[#161616] text-[#baff00]",
  unsplash: "bg-[#eee] text-[#111]",
  x: "bg-[#14171a] text-white",
  xbox: "bg-[#107c10] text-white",
};
const variantKeys = Object.keys(variants);

function Button({
  gaEvent,
  href,
  icon,
  label,
  onClick,
  rel,
  variant = "primary",
  target,
}: PropsType) {
  if (!href && !onClick) {
    throw new Error(
      "href or onClick prop (and only one of them) needs to be present",
    );
  }

  const isButton = !href && onClick;

  const ButtonTag: ElementType = isButton ? "button" : "a";

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
      className={`shadow-layer-2-dark/50 hover:shadow-layer-2-dark/50 text-shadow-button inline-block cursor-pointer touch-manipulation rounded-lg px-3 py-2 font-semibold shadow-md transition duration-300 select-none hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:shadow-none ${
        variants[variant]
      } ${icon ? "w-full" : ""}`}
      onClick={handleClick}
      {...(isButton
        ? { type: "button" }
        : {
            href,
            rel:
              [
                ...(rel ? [rel] : []),
                ...(target === "_blank" ? ["noopener", "noreferrer"] : []),
              ].join(" ") || undefined,
            target,
          })}
    >
      {label}
      {icon && (
        <div className="text-end text-3xl">
          <FontAwesomeIcon icon={icon} />
        </div>
      )}
    </ButtonTag>
  );
}

export default Button;
export { variantKeys, variants };
