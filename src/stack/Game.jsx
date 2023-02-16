import React, {
  forwardRef,
  useEffect,
  useContext,
  useRef,
  useState,
} from "react";
import { ChangeContext } from "../context/ChangeContext";
import { bdrs, onClickSite } from "../hooks/useStack";

import img1 from "/src/assets/image/icon/4-1.png";
import img2 from "/src/assets/image/icon/4-2.png";
import img3 from "/src/assets/image/icon/4-3.png";
import img4 from "/src/assets/image/icon/4-4.png";

const imgConfig = {
  0: img1,
  1: img2,
  2: img3,
  3: img4,
};

function Game(prop, ref) {
  const { index } = useContext(ChangeContext);
  const info = [
    {
      cn: "fourOne",
      name: "게임 4-1",
    },
    {
      cn: "fourTwo",
      name: "게임 4-2",
    },
    {
      cn: "fourThree",
      name: "게임 4-3",
    },
    {
      cn: "fourFour",
      name: "게임 4-4",
    },
  ];

  const infoRef = useRef([]);
  const [border, setBorder] = useState(0);

  useEffect(() => {
    bdrs(infoRef, index);
  }, [index]);

  return (
    <div className="menu__conts">
      {info.map((item, infoIndex) => (
        <div
          key={item.cn}
          className={`${item.cn} ${
            border === infoIndex ? "bdrs" : ""
          } ${infoIndex}`}
          ref={(element) => {
            infoRef.current[infoIndex] = element;
          }}
          style={{
            backgroundImage: `url('${imgConfig[infoIndex]}')`,
            borderColor: "#C2A66A",
            backgroundColor: "#EECE87",
          }}
          onClick={(e) => {
            onClickSite(e, ref, border, setBorder);
          }}
        >
          <span className="ir">{item.name}</span>
        </div>
      ))}
    </div>
  );
}

export default forwardRef(Game);
