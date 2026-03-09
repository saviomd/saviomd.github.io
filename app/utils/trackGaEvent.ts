import ReactGA from "react-ga4";

import type { GaEvent } from "~/types";

const trackGaEvent = (gaEvent: GaEvent) => {
  ReactGA.event({
    ...gaEvent,
    category: "saviomd.com",
  });
};

export default trackGaEvent;
