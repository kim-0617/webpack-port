import React, {
  forwardRef,
  useEffect,
  useContext,
  useRef,
  useState,
} from "react";
import { ChangeContext } from "../context/ChangeContext";
import { bdrs, onClickSite } from "../hooks/useStack";

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
            backgroundImage: `url(https://github.com/kim-0617/PORTFOLIO/blob/master/public/image/icon/4-${
              infoIndex + 1
            }.png?raw=true)`,
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
