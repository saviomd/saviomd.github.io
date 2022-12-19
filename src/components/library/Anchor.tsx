import { ReactNode } from "react";

import { IGaEvent, AnchorTargetType } from "../../types";
import { trackGaEvent } from "../../utils";

type PropsType = {
  children: ReactNode;
  gaEvent?: IGaEvent;
  href: string;
  target?: AnchorTargetType;
};

function Anchor({ gaEvent, children, href, target }: PropsType) {
  const handleClick = () => {
    if (gaEvent) {
      trackGaEvent(gaEvent);
    }
  };

  return (
    <a
      className="font-semibold text-primary-default underline transition duration-300 hover:text-primary-light"
      href={href}
      onClick={handleClick}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      target={target}
    >
      {children}
    </a>
  );
}

export default Anchor;
