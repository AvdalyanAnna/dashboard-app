import React from "react";
import "./style.css";
import cars from "../../../assets/img/car.png";
import TechnicalBlocks from "../../../UI/TechnicalBlocks/TechnicalBlocks";
import SectionThreeNavbar from "../../../UI/SectionThree/SectionThreeNavbar";

const Section3 = () => {
  return (
    <div className="Section3">
      <SectionThreeNavbar />
      <div className="section_block_items">
        <div className="section_block_items_one">
          <TechnicalBlocks title={"TEMPERATURE"} />
          <TechnicalBlocks title={"PHONE"} />
        </div>
        <div className="section_block_items_two">
          <img src={cars} />
        </div>
        <div className="section_block_items_three">
          <TechnicalBlocks title={"BATTERY"} />
          <TechnicalBlocks title={"TRIP A"} />
        </div>
      </div>
    </div>
  );
};

export default Section3;
