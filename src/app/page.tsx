// import Image from "next/image";
import Hero from "./components/hero";
import Contact from "./components/contact";
import Project from "./components/project";
import Services from "./components/services";
import Promotion from "./components/promotion";

export default function Home() {
  return (
    
    <div>
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
