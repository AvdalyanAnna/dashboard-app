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
          <TechnicalBlocks
            title={"TEMPERATURE"}
            temperature={true}
            temperature_text={"20"}
          />
          <TechnicalBlocks
            title={"PHONE"}
            phone={true}
            phone_one_text={"Speaker"}
            phone_two_text={"Mute"}
          />
        </div>
        <div className="section_block_items_two">
          <img src={cars} />
        </div>
        <div className="section_block_items_three">
          <TechnicalBlocks
            title={"BATTERY"}
            battery={true}
            battery_one_text={"65"}
            battery_two_text={"145"}
          />
          <TechnicalBlocks
            title={"TRIP A"}
            trip={true}
            trip_one_text={"56"}
            trip_two_text={"1.8"}
          />
        </div>
      </div>
    </div>
  );
};

export default Section3;
