import React, {
  forwardRef,
  useEffect,
  useContext,
  useRef,
  useState,
} from "react";
import { ChangeContext } from "../context/ChangeContext";
import { bdrs, onClickSite } from "../hooks/useStack";

function Responsive(prop, ref) {
  const { index } = useContext(ChangeContext);
  const info = [
    {
      cn: "twoOne",
      name: "반응형 2-1",
    },
    {
      cn: "twoTwo",
      name: "반응형 2-2",
    },
    {
      cn: "twoThree",
      name: "반응형 2-3",
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
            backgroundImage: `url(https://github.com/kim-0617/PORTFOLIO/blob/master/public/image/icon/2-${
              infoIndex + 1
            }.png?raw=true)`,
            borderColor: "#A2A2A2",
            backgroundColor: "#DEDEDE",
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

export default forwardRef(Responsive);
