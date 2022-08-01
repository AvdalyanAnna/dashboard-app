import React from "react";
import "./discountBox.css";

const DiscountBox = ({ isColor, text }) => {
  return (
    <div className={`discount_box ${isColor}`}>
      <p>{text}</p>
    </div>
  );
};

export default DiscountBox;
