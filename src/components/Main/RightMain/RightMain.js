import React from "react";
import Dashboard from '../Dashboard/dashboard'
import Section from '../MainSection/index'
import Section2 from '../MainSection2/index'
import './style.css'

const RightMain = () => {
  return (
    <div className="right">
      <Dashboard />
      <Section />
      <Section2 />
    </div>
  );
};

export default RightMain;
