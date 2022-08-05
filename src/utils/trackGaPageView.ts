import ReactGA from "react-ga";

const trackGaPageView = () => {
  ReactGA.initialize(import.meta.env.PROD ? "UA-22412489-1" : "UA-22412489-2");
  ReactGA.pageview(window.location.pathname + window.location.search);
};

export default trackGaPageView;
