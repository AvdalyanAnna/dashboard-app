import React from "react";
import "./style.css";
import gal from "../../../assets/img/ptichka.png";
import plus from "../../../assets/img/plus.png";
import cars from "../../../assets/img/cars.png";
import Section3 from "../MainSection3";
import SectionTwoBlocks from "../../../UI/SectionTwoBlocks/SectionTwoBlocks";

const Section2 = () => {
  return (
    <div className="Section2">
      <div className="Section2_left">
        <SectionTwoBlocks
          title={"Binance Smart Game"}
          isBlock={true}
          isView={true}
          text={"$129,850"}
          isChange={true}
        />
        <SectionTwoBlocks title={"Your last car for Race"} isBlock={false} />
      </div>
      <div className="Section2_right">
        <Section3 />
      </div>
    </div>
  );
};

export default Section2;
