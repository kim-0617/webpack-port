import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function Header() {
  const tweenTarget = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      gsap.to(tweenTarget.current, 0.5, { x: 10, opacity: 1 });
    }, 6500);
  }, []);

  return (
    <header id="header">
      <h1 ref={tweenTarget}>
        <a href="#">PORTFOLIO</a>
      </h1>
    </header>
  );
}

export default Header;
