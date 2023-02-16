import React, {
  forwardRef,
  useEffect,
  useContext,
  useRef,
  useState,
} from "react";
import { ChangeContext } from "../context/ChangeContext";
import { bdrs, onClickSite } from "../hooks/useStack";

import img1 from "/src/assets/image/icon/6-1.png";
import img2 from "/src/assets/image/icon/6-2.png";

const imgConfig = {
  0: img1,
  1: img2,
};

function VueSite(prop, ref) {
  const info = [
    { cn: "sixOne", name: "VUE 6-1" },
    { cn: "sixTwo", name: "VUE 6-2" },
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
            backgroundImage: `url('${imgConfig[infoIndex]}')`,
            borderColor: "#C99B87",
            backgroundColor: "#FABDA3",
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

export default forwardRef(VueSite);
