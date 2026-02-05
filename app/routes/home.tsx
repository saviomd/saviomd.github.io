import { useEffect } from "react";

import {
  About,
  Contact,
  Footer,
  Header,
  Links,
  Projects,
} from "~/components/app";
import { PageMetadata } from "~/components/library";
import { trackGaPageView } from "~/utils";

export default function Home() {
  useEffect(() => {
    trackGaPageView();
  }, []);

  return (
    <>
      <PageMetadata />
      <Header />
      <About />
      <Links />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
