import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Focus() {
  useEffect(() => {
    let tl = gsap.timeline({
      defaults: {
        ease: "power1.in",
        duration: 1,
      },
    });
    tl.fromTo(".mask", { xPercent: 0 }, { xPercent: 400, stagger: 0.1 });

    ScrollTrigger.create({
      animation: tl,
      trigger: "#focus h2",
      end: "+=80%",
      scrub: 1,
      // pin: true,
    });
  }, []);

  return (
    <article id="focus">
      <h2>
        <span>
          Seong Hyeon Kim <br /> Focus me
        </span>
        <div className="mask"></div>
      </h2>
      <div className="focus__inner">
        <img src="./assets/image/focus.png" alt="포커스페이지 사진입니다." />
        <div className="focus__conts">
          <div className="focus__conts__detail">
            <h3>빨리 바뀌는 개발 트렌드에 적응하다! </h3>
            <p>
              어릴적부터 학문에 관심이 많았습니다. 그래서 진득하게 무언가의
              사용법과 작동원리를 파악하는데 익숙합니다.
            </p>
          </div>
          {/* 01 */}
          <div className="focus__conts__detail">
            <h3>운동을 좋아합니다!</h3>
            <p>
              저는 운동을 좋아합니다. 여러 스포츠들을 즐기며 농구, 볼링 등을
              좋아합니다. 요즘은 웨이트 트레이닝에 푹 빠져있죠. 그렇게 때문에
              활동적으로 다른 사람들과 잘 어울릴 수 있습니다.
            </p>
          </div>
          {/* 02 */}
          <div className="focus__conts__detail">
            <h3>잘 먹습니다!</h3>
            <p>
              저는 먹는것도 좋아합니다! 옛말에는 잘 먹는것도 복이라고 했습니다.
              항상 복스럽게 먹는다는 말을 어른들께 많이 들었습니다. 자고로 잘
              먹어야 일도 잘하지 않겠습니까
            </p>
          </div>
          {/* 03 */}
        </div>
      </div>
    </article>
  );
}

export default Focus;
