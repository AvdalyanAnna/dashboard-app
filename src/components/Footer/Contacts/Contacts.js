import React from "react";
import "./style.css";
import img from "../../../assets/img/footer/Shape.png";
import img2 from "../../../assets/img/footer/Vector.png";
import img3 from "../../../assets/img/footer/Group.png";
import img4 from "../../../assets/img/footer/message.png";
import img5 from "../../../assets/img/footer/telegram.png";
import img6 from "../../../assets/img/footer/duo.png";
import img7 from "../../../assets/img/footer/comment.png";
import img8 from "../../../assets/img/footer/chat.png";
import discord from "../../../assets/img/footer/discord.png";
import tel from "../../../assets/img/footer/tel.png";
import robot from "../../../assets/img/footer/robot.png";
import ellipse1 from "../../../assets/img/footer/ellipse1.png";
const Contacts = () => {
  return (
    <div className="footer_big_block">
      <div className="footer_small_block">
        <div className="one_footer_small_block">
          <h3>Be in touch with us</h3>
          <div className="hr"></div>
          <div className="images">
            <img src={discord} alt="discord" />
            <img src={tel} alt="tel" />
          </div>
        </div>

        <div className="two_footer_small_block">
          <div className="boxes">
            <img src={img} alt="Shape" />
            <p>Dashboard</p>
          </div>
          <div className="boxes">
            <img src={img2} alt="Shape" />
            <p>Stats</p>
          </div>
          <div className="boxes">
            <img src={img3} alt="Shape" />
            <p>Partner bonus</p>
          </div>
          <div className="boxes">
            <img src={img4} alt="Shape" />
            <p>Info</p>
          </div>
          <div className="boxes">
            <img src={img5} alt="Shape" />
            <p>Telegram bot</p>
          </div>
          <div className="boxes">
            <img src={img6} alt="Shape" />
            <p>Promo</p>
          </div>
          <div className="boxes">
            <img src={img7} alt="Shape" />
            <p>News</p>
          </div>
        </div>

        <div className="three_footer_small_block">
          <div className="three_footer_one">
            <img src={img8} alt="Shape" />
            <p>chat with us</p>
          </div>
          <div className="three_footer_two">
            <img src={robot} alt="robot" className="one_img" />
            <img src={ellipse1} alt="ellipse" className="two_img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
