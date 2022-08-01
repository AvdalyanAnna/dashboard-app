import React from "react";
import "./style.css";
import DashbordBlocks from "./DashbordBlocks/DashbordBlocks";
import { DASHBORD_BLOCK } from "../../constans/DashbordBlocks";
import RightMain from "./RightMain/RightMain";
import Profile from './Profile/index'

export const Main = () => {
  return (
    <div className="Main">
      <div className="left">
          <Profile />
      </div>
      <div className="right">
          <RightMain />
      </div>
    </div>
  );
};
