// import Image from "next/image";
import Hero from "./components/hero";
import Contact from "./components/contact";

import Project from "./components/project";
import Services from "./components/services";

export default function Home() {
  return (
     <div>
    <Hero/>
    <div>
    <Project/>
    </div>
    <Services/>
    <Contact/>
     </div>
  );
}
