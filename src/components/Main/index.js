import React from "react";
import Profile from "./Profile";
import "./style.css";
import RightMain from "./RightMain/RightMain";

export const Main = () => {
  return (
    <div className="Main">
      <div className="main_left">
        <Profile />
      </div>
      <div className="main_right">
        <RightMain />
      </div>
    </div>
  );
};
