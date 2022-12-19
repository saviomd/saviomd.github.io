import { useEffect } from "react";

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
    <div className="text-typography-default">
      <Header />
      <About />
      <Links />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
