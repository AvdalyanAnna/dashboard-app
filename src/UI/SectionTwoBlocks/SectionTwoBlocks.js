import React from "react";
import CarForRace from "../CarForRace/CarForRace";
import EmptyPlus from "../EmptyPlus/EmptyPlus";
import "./sectionTwoBlocks.css";

const SectionTwoBlocks = ({ title, isBlock, text, isChange, isView }) => {
  return (
    <div className="section_two_blocks">
      <div className="section_two_blocks_one_part">
        <h1 className="section_two_blocks_text">{title}</h1>
        {isBlock ? (
          <div>
            <h1 className="small_block_button_text">Active</h1>
          </div>
        ) : null}
      </div>

      {isView ? <h1 className="is_view_text">{text}</h1> : null}

      {isChange ? (
        <div className="is_change_block">
          <EmptyPlus isClass={"checked"} />
          <EmptyPlus isClass={"plus"} />
          <EmptyPlus isClass={"none"} />
        </div>
      ) : (
        <CarForRace />
      )}
    </div>
  );
};

export default SectionTwoBlocks;
