import { useRef } from "react";

import "./App.css";
import Navbar from "./component/NavBar/Navbar";
import Hero from "./component/Hero/Hero";
import Skills from "./component/Skills/Skills";
import Service from "./component/Services/Service";
import Portfolio from "./component/Portfolio/Portfolio";
import Number from "./component/Number/Number";
import Testimonials from "./component/Testimonials/Testimonials";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
import AnimatedCursor from "react-animated-cursor";

function App() {
 
  const skillsRef = useRef(null);
  const serviceRef = useRef(null);
  const ContactRef = useRef(null);

  const scrollToSkills = () => {
    if (skillsRef.current) {
      skillsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToService = () => {
    if (serviceRef.current) {
      serviceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    if (ContactRef.current) {
      ContactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="0, 65, 125"
        outerAlpha={0.2}
        innerScale={1.5}
        outerStyle={{
          border: "3px solid #fff",
        }}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <div>
        <Navbar
          scrollToSkills={scrollToSkills}
          scrollToService={scrollToService}
          scrollToContact={scrollToContact}
        />
        <Hero />
        <div ref={skillsRef}>
          <Skills />
        </div>
        {/* <div>
          <Service />
        </div> */}
        <div ref={serviceRef}>
          <Portfolio />
        </div>

        <Number />
        <Testimonials />
        <div ref={ContactRef}>
          <Contact />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
