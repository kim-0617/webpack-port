import React, {
  forwardRef,
  useEffect,
  useContext,
  useRef,
  useState,
} from "react";
import { ChangeContext } from "../context/ChangeContext";
import { bdrs, onClickSite } from "../hooks/useStack";

function ReactSite(prop, ref) {
  const { index } = useContext(ChangeContext);
  const info = [
    {
      cn: "sevenOne",
      name: "React 7-1",
    },
    {
      cn: "sevenTwo",
      name: "React 7-2",
    },
    {
      cn: "sevenThree",
      name: "React 7-3",
    },
    {
      cn: "sevenFour",
      name: "React 7-4",
    },
    {
      cn: "sevenFive",
      name: "React 7-5",
    },
    {
      cn: "sevenSix",
      name: "React 7-6",
    },
    {
      cn: "sevenSeven",
      name: "React 7-7",
    },
    {
      cn: "sevenEight",
      name: "React 7-8",
    },
    {
      cn: "sevenNine",
      name: "React 7-9",
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
            backgroundImage: `url('./assets/image/icon/7-${
              infoIndex + 1
            }.png')`,
            borderColor: "#879AAA",
            backgroundColor: "#B1C6DF",
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

export default forwardRef(ReactSite);
