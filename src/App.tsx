import { useEffect } from "react";

import "animate.css/animate.css";
import "./App.css";
import {
  About,
  Contact,
  Footer,
  Header,
  Links,
  Projects,
} from "./components/app";
import { trackGaPageView } from "./utils";

function App() {
  useEffect(() => {
    trackGaPageView();
  }, []);

  return (
    <>
      <Header />
      <About />
      <Links />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
