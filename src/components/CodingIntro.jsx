import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function CodingIntro() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    function bubbles() {
      $.each($(".particletext.bubbles"), function () {
        var bubblecount = ($(this).width() / 50) * 1.2;
        for (var i = 0; i <= bubblecount; i++) {
          var size = $.rnd(30, 50) / 10;
          $(this).append(
            '<span class="particle" style="top:' +
              $.rnd(20, 80) +
              "%; left:" +
              $.rnd(0, 95) +
              "%;width:" +
              size +
              "px; height:" +
              size +
              "px;animation-delay: " +
              $.rnd(0, 30) / 10 +
              's;"></span>',
          );
        }
      });
    }

    jQuery.rnd = function (m, n) {
      m = parseInt(m);
      n = parseInt(n);
      return Math.floor(Math.random() * (n - m + 1)) + m;
    };
    bubbles();

    const tl = gsap.timeline();
    gsap.set(".work1", {
      webkitTextFillColor: "transparent",
      webkitTextStroke: "2px #fff",
    });
    gsap.set(".work2", {
      webkitTextFillColor: "transparent",
      webkitTextStroke: "2px #fff",
    });
    gsap.set(".work3", {
      webkitTextFillColor: "transparent",
      webkitTextStroke: "2px #fff",
    });
    gsap.set(".coding1", {
      webkitTextFillColor: "transparent",
      webkitTextStroke: "2px #fff",
    });
    gsap.set(".coding2", {
      webkitTextFillColor: "transparent",
      webkitTextStroke: "2px #fff",
    });
    gsap.set(".coding3", {
      webkitTextFillColor: "transparent",
      webkitTextStroke: "2px #fff",
    });

    tl.to(".work1", {
      duration: 1,
      webkitTextFillColor: "#fff",
      ease: "power3.in",
      scrollTrigger: {
        trigger: ".work1",
        scrub: 1,
        end: "-=500",
      },
    });
    tl.to(".coding2", {
      duration: 1,
      webkitTextFillColor: "#fff",
      ease: "power3.in",
      scrollTrigger: {
        trigger: ".coding2",
        scrub: 1,
        end: "+=500",
      },
    });
    tl.to(".work3", {
      duration: 1,
      webkitTextFillColor: "#fff",
      ease: "power3.in",
      scrollTrigger: {
        trigger: ".work3",
        scrub: 1,
        end: "+=500",
      },
    });
  }, []);

  return (
    <>
      <article id="CodingIntro">
        <div className="CodingIntro__inner">
          <div>
            <span className="particletext bubbles space work1">work</span>
            <span className="line particletext bubbles coding1">coding</span>
          </div>
          <div>
            <span className="line particletext bubbles space work2">work</span>
            <span className="particletext bubbles coding2">coding</span>
          </div>
          <div>
            <span className="particletext bubbles space work3">work</span>
            <span className="line particletext bubbles coding3">coding</span>
          </div>
        </div>
      </article>
    </>
  );
}

export default CodingIntro;
