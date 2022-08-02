import React from "react";
import DiscountBox from "../../../UI/DiscountBox";
import Load from "../../../UI/Load/Load";
import "./dashbordBlocks.css";

const DashbordBlocks = ({ img, text, title, isView, color, isLoad }) => {
  return (
    <div className="block-items">
      <div className="items-txt">
        <h1>{title}</h1>
        <div className="hr"></div>
        <div className="is_view_button">
          <h2>{text}</h2>
          {isView ? <DiscountBox text={"+15%"} isColor={color} /> : null}
          {isLoad ? <Load width={70}/> : null}
        </div>
      </div>

      <div className="items-img">{img}</div>
    </div>
  );
};

export default DashbordBlocks;
