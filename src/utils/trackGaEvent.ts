import ReactGA from "react-ga4";

import type { IGaEvent } from "src/types";

const trackGaEvent = (gaEvent: IGaEvent) => {
  ReactGA.event({
    ...gaEvent,
    category: "saviomd.com",
  });
};

export default trackGaEvent;
