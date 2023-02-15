import { AboutIntro, Focus, Skill } from "../components";
import React, { useRef, useState, useEffect, forwardRef } from "react";

function About(prop, ref) {
  const aboutRef = useRef(null);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= 923 - window.innerHeight / 3) {
      setScroll(true);
    }

    if (window.scrollY >= window.innerHeight * 2.5) {
      ref.current.style.background = "#f64c0e";
    } else {
      ref.current.style.background = "#0000e9";
    }
  };

  return (
    <section id="about" ref={aboutRef}>
      <AboutIntro scroll={scroll} />
      <Focus />
      <Skill />
    </section>
  );
}

export default forwardRef(About);
