// import Image from "next/image";
import Hero from "./components/hero";
import Contact from "./components/contact";
import Project from "./components/project";
import Services from "./components/services";
import Promotion from "./components/promotion";
import Termsandcondition from "./components/Termsandcondition";
import { div } from "framer-motion/client";
 
export default function Home() {
  return (
    <div className="scroll-smooth">
    <Hero/>
    <div>
    <Project/>
    </div>
    <Services/>
    <Promotion/>
    <Contact/>
     </div>
      
  );
}
