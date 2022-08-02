import React from "react";
import "./emptyPlus.css";

const EmptyPlus = ({ isClass, isChecked, isPlus, isEmpty }) => {
  return (
    <div className={`boxes block_${isClass}`}>
      {isChecked ? (
        <svg
          width="37"
          height="29"
          viewBox="0 0 37 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.9918 22.2438L3.35611 13.6081L0.415405 16.5281L11.9918 28.1045L36.8429 3.25349L33.9229 0.333496L11.9918 22.2438Z"
            fill="white"
          />
        </svg>
      ) : null}

      {isPlus ? (
        <svg
          width="59"
          height="59"
          viewBox="0 0 59 59"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.8">
            <circle
              opacity="0.9"
              cx="29.8124"
              cy="29.6012"
              r="26.9155"
              stroke="white"
              stroke-width="4.141"
            />
            <path
              opacity="0.9"
              d="M39.603 30.577H32.018V39.064H28.984V30.577H21.399V27.789H28.984V19.589H32.018V27.789H39.603V30.577Z"
              fill="white"
            />
          </g>
        </svg>
      ) : null}

      {isEmpty ? null : null}
    </div>
  );
};

export default EmptyPlus;
