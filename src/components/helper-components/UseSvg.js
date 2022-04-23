import React from "react";
import svg from "../../assets/svg/sprite.svg";

function UseSvg(props) {
  return (
    <svg className={`${props.className}`}>
      <use xlinkHref={`${svg}#icon-${props.iconName}`} />
    </svg>
  );
}

export default UseSvg;
