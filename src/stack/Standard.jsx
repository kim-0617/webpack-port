import React, {
  forwardRef,
  useEffect,
  useContext,
  useRef,
  useState,
} from "react";
import { ChangeContext } from "../context/ChangeContext";
import { bdrs, onClickSite } from "../hooks/useStack";

function standard(prop, ref) {
  const info = [
    {
      cn: "oneOne",
      name: "알고리즘",
    },
    {
      cn: "oneTwo",
      name: "웹표준코딩 1-1",
    },
    {
      cn: "oneThree",
      name: "웹표준코딩 1-2",
    },
    {
      cn: "oneFour",
      name: "웹표준코딩 1-3",
    },
  ];

  const { index } = useContext(ChangeContext);
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
            backgroundImage: `url('./assets/image/icon/1-${
              infoIndex + 1
            }.png')`,
            borderColor: "#737199",
            backgroundColor: "#A7A3D0",
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

export default forwardRef(standard);
