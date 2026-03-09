import type { ReactNode } from "react";

import type { AnchorTarget, GaEvent } from "~/types";
import { trackGaEvent } from "~/utils";

interface Props {
  children: ReactNode;
  gaEvent?: GaEvent;
  href: string;
  target?: AnchorTarget;
}

function Anchor({ gaEvent, children, href, target }: Props) {
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
