import { Header, Main, Footer } from "./layouts";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import React from "react";

function App() {
  gsap.registerPlugin(ScrollTrigger);

  // // create the smooth scroller FIRST!
  // let smoother = ScrollSmoother.create({
  //   wrapper: '#smooth-wrapper',
  //   content: '#smooth-content',
  //   smooth: 2,   // seconds it takes to "catch up" to native scroll position
  //   effects: true // look for data-speed and data-lag attributes on elements and animate accordingly
  // });

  // useEffect(() => {
  //   const lenis = new Lenis({
  //     duration: 1.7,
  //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
  //   })
  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);

  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: 'section',
  //       scrub: true
  //     }
  //   })
  //     .to('section', {
  //       stagger: 1,
  //       y: 0,
  //     })
  // }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: "vertical", // vertical, horizontal
      gestureDirection: "vertical", // vertical, horizontal, both
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: true,
      touchMultiplier: 10,
      infinite: false,
    });

    //get scroll value
    // lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
    //   console.log({ scroll, limit, velocity, direction, progress })
    // })

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
