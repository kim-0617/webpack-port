import React, { useEffect, useState } from "react";

const address = [
  // 소스보기, 데모보기
  [
    "https://github.com/kim-0617/algorithm/tree/main/02",
    "https://kim0617.tistory.com/category/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98",
  ],
  [
    "https://github.com/kim-0617/codingclass/tree/main/site/site1.1",
    "https://kim-0617.github.io/codingclass/site/site1.2/index.html",
  ],
  [
    "https://github.com/kim-0617/codingclass/tree/main/site/site1.2",
    "https://kim-0617.github.io/codingclass/site/site1.1/index.html",
  ],
  [
    "https://github.com/kim-0617/codingclass/tree/main/site/site1.4",
    "https://kim-0617.github.io/codingclass/site/site1.4/index.html",
  ],
  [
    "https://github.com/kim-0617/codingclass/tree/main/site/site2-prev",
    "https://kim-0617.github.io/codingclass/site/site2-prev/index.html",
  ],
  [
    "https://github.com/kim-0617/codingclass/tree/main/site/site1-responsive",
    "https://kim-0617.github.io/codingclass/site/site1-responsive/index.html",
  ],
  [
    "https://github.com/kim-0617/bank_modern_app",
    "https://bank-modern-app-ashy.vercel.app/",
  ],
  [
    "https://github.com/kim-0617/codingclass/blob/main/javascript/effect/parallaxEffect07.html",
    "https://kim-0617.github.io/codingclass/javascript/effect/parallaxEffect07.html",
  ],
  [
    "https://github.com/kim-0617/codingclass/blob/main/javascript/effect/quizEffect06.html",
    "https://kim-0617.github.io/codingclass/javascript/effect/quizEffect06.html",
  ],
  [
    "https://github.com/kim-0617/codingclass/blob/main/javascript/effect/sliderEffect07.html",
    "https://kim-0617.github.io/codingclass/javascript/effect/sliderEffect07.html",
  ],
  [
    "https://github.com/kim-0617/codingclass/blob/main/javascript/effect/mouseEffect06.html",
    "https://kim-0617.github.io/codingclass/javascript/effect/mouseEffect06.html",
  ],
  [
    "https://github.com/kim-0617/codingclass/blob/main/javascript/asset/js/tetris2.js",
    "https://kim-0617.github.io/codingclass/javascript/effect/gameEffect01.html",
  ],
  [
    "https://github.com/kim-0617/codingclass/blob/main/javascript/asset/js/searchGame.js",
    "https://kim-0617.github.io/codingclass/javascript/effect/gameEffect01.html",
  ],
  [
    "https://github.com/kim-0617/codingclass/blob/main/javascript/asset/js/memory.js",
    "https://kim-0617.github.io/codingclass/javascript/effect/gameEffect01.html",
  ],
  [
    "https://github.com/kim-0617/codingclass/blob/main/javascript/asset/js/music.js",
    "https://kim-0617.github.io/codingclass/javascript/effect/gameEffect01.html",
  ],
  [
    "https://github.com/kim-0617/PHPClass/tree/main/php",
    "http://als1702.dothome.co.kr/php/main/main.php",
  ],
  [
    "https://github.com/kim-0617/PHPTeamProject/tree/main/php",
    "http://kkk5993.dothome.co.kr/php/main/main.php",
  ],
  ["https://github.com/kim-0617/vueclass", "https://vueclass17.web.app/"],
  ["https://github.com/kim-0617/vue_api", "https://vueapi17-2b28a.web.app/"],
  ["https://github.com/kim-0617/react_api", "https://cra02.netlify.app/"],
  [
    "https://github.com/kim-0617/react_youtube",
    "https://devyoutube.netlify.app/",
  ],
  [
    "https://github.com/kim-0617/react_music",
    "https://musicplaying.netlify.app/",
  ],
  [
    "https://github.com/kim-0617/webgameReact",
    "https://reactwebgame-314c7.web.app/",
  ],
  [
    "https://github.com/kim-0617/firebaselogin",
    "https://mydiary-f4e5d.web.app/login",
  ],
  [
    "https://github.com/kim-0617/react-blog",
    "https://github.com/kim-0617/react-blog",
  ],
  [
    "https://github.com/kim-0617/sleact/tree/main/alecture",
    "https://github.com/kim-0617/sleact/tree/main/alecture",
  ],
  [
    "https://github.com/kim-0617/twitterclone",
    "https://twitterclone-647be.firebaseapp.com/",
  ],
  [
    "https://github.com/kim-0617/fitness-info",
    "https://jsmfitinfo.netlify.app/",
  ],
];

function Slider({ src, index, data }) {
  const [color, setColor] = useState("");

  const onClickSource = () => {
    window.open(address[index][0]);
  };

  const onClickDemo = () => {
    window.open(address[index][1]);
  };

  useEffect(() => {
    if (index < 4) {
      setColor("#392de44d");
    } else if (index < 7) {
      setColor("#6e6e6ec7");
    } else if (index < 11) {
      setColor("#ef7345b3");
    } else if (index < 15) {
      setColor("#d39d2ad1");
    } else if (index < 17) {
      setColor("#44895eb8");
    } else if (index < 19) {
      setColor("#ffa07ba1");
    } else {
      setColor("#697f99b0");
    }
  }, [index]);

  if (!data?.title) return null;

  return (
    <>
      <div
        className="slider__detail"
        style={{
          background: color,
        }}
      >
        <h3>{data.title}</h3>
        <p>{data.desc}</p>
        <div className="btn__wrap">
          <button className="btn1">
            <span onClick={onClickSource}>소스보기</span>
          </button>
          <button className="btn2">
            <span onClick={onClickDemo}>데모보기</span>
          </button>
        </div>
      </div>
      <img src={`src/assets/${src}`} alt={`${index}번째 이미지`} />
    </>
  );
}

export default Slider;
