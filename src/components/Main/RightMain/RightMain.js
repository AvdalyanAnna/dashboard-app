import React from "react";
import Dashboard from "../Dashboard/dashboard";
import DashbordBlocks from "../DashbordBlocks/DashbordBlocks";
import Section2 from "../MainSection2/index";
import "./style.css";
import { DASHBORD_BLOCK } from "../../../constans/DashbordBlocks";

const RightMain = () => {
  return (
    <div className="rigth_main">
      <Dashboard />
      <div className="dashbord_block_section">
        {DASHBORD_BLOCK.map((e, i) => {
          return (
            <DashbordBlocks
              key={e.id}
              title={e.title}
              text={e.cost}
              img={e.img}
              isView={e.isViewButton}
              color={e.buttonColor}
              isLoad={e.isLoad}
            />
          );
        })}
      </div>
      <h1 className="right_main_title">Here all your cars and main information</h1>
      <Section2 />
    </div>
  );
};

export default RightMain;
