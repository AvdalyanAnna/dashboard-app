import React from "react";
import "./dashbordBlocks.css";

const DashbordBlocks = ({ img, text, title }) => {
  return (
      <div className="block-items">
        <div className="items-txt">
          <h1>{title}</h1>
          <div className="hr"></div>
          <h2>{text}</h2>
        </div>

        <div className="items-img">{img}</div>
      </div>
  );
};

export default DashbordBlocks;
