import React from "react";
import "./style.css";

export const TitleSize = {
  H1: "h1",
  H2: "h2",
  H3: "h3",
  H4: "h4",
  B18: "b18"
};

function Title({children, size}) {
  return (
    <p className={`title title_${size}`}>{children}</p>
  )
}

export default Title;