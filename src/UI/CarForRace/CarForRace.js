import React from "react";
import DiscountBox from "../DiscountBox";
import "./carForRace.css";

const CarForRace = () => {
  return (
    <div className="car_for_race">
      <div className="car_for_race_left">
        <div className="car_for_race_one_left">
          <h1>Staking</h1>
          <DiscountBox text={"+15%"} isColor={"transparent"} />
        </div>
        <div className="car_for_race_two_left">
          <h1>Race speed</h1>
          <DiscountBox text={"+15%"} isColor={"transparent"} />
        </div>
      </div>

      <div className="car_for_race_right"></div>
    </div>
  );
};

export default CarForRace;
