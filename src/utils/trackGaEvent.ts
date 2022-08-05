import { IGaEvent } from "../types";

const trackGaEvent = ({ action, label, value }: IGaEvent) => {
  if (!!window.ga) {
    window.ga("send", "event", "saviomd.com", action, label, value);
  }
};

export default trackGaEvent;
