import { ReactNode } from "react";

import type { IGaEvent, AnchorTargetType } from "src/types";
import { trackGaEvent } from "src/utils";

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
      className="text-primary-default hover:text-primary-light font-semibold underline transition duration-300"
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
