import React from "react";
import "./style.css";
import { BLOCKS_DATA } from "../../../constans/BlockData";
import Blocks from "../Blocks/Blocks";

const Contacts = () => {
  return (
    <div className="footer_big_block">
      <div className="footer_small_block">
        <div className="one_footer_small_block">
          <Blocks isOne={true} text={"Be in touch with us"} />
        </div>

        <div className="two_footer_small_block">
          {BLOCKS_DATA.map((e, i) => {
            return (
              <div className="two_footer_blocks_data">
                <Blocks key={e.id} img={e.img} text={e.text} isTwo={true} />
              </div>
            );
          })}
        </div>

        <div className="three_footer_small_block_div">
          <Blocks isThree={true} text={"chat with us"} />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
