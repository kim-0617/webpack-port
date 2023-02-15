import { Intro, About, Coding, Dummy } from "../sections";
import React, { useRef, useState } from "react";
import { ImgLoader } from "../others";

function Main() {
  const [isLoading, setIsLoading] = useState(false);
  const introRef = useRef(null);

  return (
    <main id="main">
      {isLoading ? (
        <>
          <ImgLoader setIsLoading={setIsLoading} />
          <Coding />
        </>
      ) : (
        <>
          <Intro isLoading={isLoading} ref={introRef} />
          <About ref={introRef} />
          <Dummy />
          <Coding />
        </>
      )}
    </main>
  );
}

export default Main;
