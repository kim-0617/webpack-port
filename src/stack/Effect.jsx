import React, {
  forwardRef,
  useEffect,
  useContext,
  useRef,
  useState,
} from "react";
import { ChangeContext } from "../context/ChangeContext";
import { bdrs, onClickSite } from "../hooks/useStack";

function Effect(prop, ref) {
  const { index } = useContext(ChangeContext);
  const info = [
    {
      cn: "threeOne",
      name: "이펙트 3-1",
    },
    {
      cn: "threeTwo",
      name: "이펙트 3-2",
    },
    {
      cn: "threeThree",
      name: "이펙트 3-3",
    },
    {
      cn: "threeFour",
      name: "이펙트 3-4",
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
            backgroundImage: `url(https://github.com/kim-0617/PORTFOLIO/blob/master/public/image/icon/3-${
              infoIndex + 1
            }.png?raw=true)`,
            borderColor: "#B89186",
            backgroundColor: "#F9D1C2",
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

export default forwardRef(Effect);
