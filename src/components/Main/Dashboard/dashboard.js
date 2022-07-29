import React from "react";
import "./style.css";
import img from '../../../assets/img/box2.png'
import img2 from '../../../assets/img/box.png'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard_text">
        <h1>Dashboard</h1>
      </div>

      <div className="personal-link">
        <div className="personal-link-container">
          <div className="personal-link-box">
            <h3>My personal link</h3>
          </div>

          <div className="personal-link-box2">
            <p className="bsg">BSG.IO/Id1245</p>
            <button className="btn">
              <img src={img} alt="box" />
              <p>Copy</p>
            </button>
            <button className="btn2">
              <img src={img2} alt="box2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
