import { mapping, reverseMapping } from "../components/CodingWork";

export const bdrs = (infoRef, index) => {
  [...infoRef.current].forEach((r) => {
    r.classList.remove("bdrs");
  });

  document.querySelector(`.${reverseMapping[index]}`)?.classList.add("bdrs");
};

export const onClickSite = (e, ref, border, setBorder) => {
  e.stopPropagation();

  const target = e.target.className
    .split(" ")
    .filter((x) => x == parseInt(x))
    .map((y) => parseInt(y))[0];

  setBorder(target);

  if (border != target) {
    const name = e.target.className.replace("bdrs", "").replace(target, "");
    ref.current.swiper.slideTo(mapping[name]);
  }
};
