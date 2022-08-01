import React from "react";
import "./profileButton.css";

const ProfileButton = ({ text }) => {
  return (
    <div className="profile_button">
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="5.71373"
              height="24.8044"
              transform="matrix(0.9061 -0.423064 0.421126 0.907002 9.57422 7.38281)"
              fill="#1A224B"
            />
            <rect
              width="5.7241"
              height="24.7595"
              transform="matrix(0.421126 0.907002 -0.9061 0.423064 27.3967 9.59033)"
              fill="#1A224B"
            />
          </svg>
          <p>{text}</p>
    </div>
  );
};

export default ProfileButton;
