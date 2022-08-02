import React from "react";
import "./technicalBlocks.css";

const TechnicalBlocks = ({
  title,
  temperature,
  temperature_text,
  phone,
  battery,
  trip,
  phone_one_text,
  phone_two_text,
  battery_one_text,
  battery_two_text,
  trip_one_text,
  trip_two_text,
}) => {
  return (
    <div className="technical_blocks">
      <h1 className="technical_blocks_text">{title}</h1>
      {temperature ? (
        <div className="temperature_block">
          <div className="temperature_one">
            <h1 className="temperature_text">{temperature_text}</h1>
            <p>ºC</p>
          </div>

          <div className="temperature_img">
            <div className="one_img">
              <svg
                width="41"
                height="41"
                viewBox="0 0 41 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.318855"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.7913 0.808594L40.7805 40.787H0.802124L20.7913 0.808594Z"
                  fill="#D8D8D8"
                />
              </svg>
            </div>
            <div className="two_img">
              <svg
                width="41"
                height="41"
                viewBox="0 0 41 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.318855"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.7911 40.8081L40.7802 0.829739H0.80188L20.7911 40.8081Z"
                  fill="#D8D8D8"
                />
              </svg>
            </div>
          </div>
        </div>
      ) : null}

      {phone ? (
        <div className="phone_block">
          <div className="phone_one">
            <h2 className="phone_block_text">{phone_one_text}</h2>
            <div className="phone_one_img">
              <svg
                width="56"
                height="34"
                viewBox="0 0 56 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_24_1414)">
                  <path
                    opacity="0.5"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.1048 0.446777C7.92239 0.446777 0.478577 7.89058 0.478577 17.073V17.073C0.478577 26.2554 7.92238 33.6992 17.1048 33.6992H38.558C47.7404 33.6992 55.1842 26.2554 55.1842 17.073V17.073C55.1842 7.89058 47.7404 0.446777 38.558 0.446777H17.1048Z"
                    fill="url(#paint0_linear_24_1414)"
                  />
                  <g opacity="0.9" filter="url(#filter0_d_24_1414)">
                    <circle
                      cx="38.5587"
                      cy="17.0734"
                      r="15.0173"
                      fill="url(#paint1_linear_24_1414)"
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_d_24_1414"
                    x="-81.6662"
                    y="-103.151"
                    width="240.45"
                    height="240.45"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="52.6038" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.890196 0 0 0 0 0.188235 0 0 0 0 0.576471 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_24_1414"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_24_1414"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_24_1414"
                    x1="0.904902"
                    y1="39.0325"
                    x2="55.1926"
                    y2="39.0325"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#D2469E" stop-opacity="0.83" />
                    <stop offset="1" stop-color="#4BD5CF" stop-opacity="0.83" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_24_1414"
                    x1="29.4637"
                    y1="-5.70445"
                    x2="59.4295"
                    y2="23.4341"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#EA3498" />
                    <stop offset="1" stop-color="#A6075E" />
                  </linearGradient>
                  <clipPath id="clip0_24_1414">
                    <rect
                      width="54.7056"
                      height="33.2524"
                      fill="white"
                      transform="translate(0.478577 0.446777)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          <div className="phone_two">
            <h2 className="phone_block_text">{phone_two_text}</h2>
            <div className="phone_two_img">
              <svg
                width="56"
                height="35"
                viewBox="0 0 56 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_24_1411)">
                  <path
                    opacity="0.5"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.2084 0.675781C8.02602 0.675781 0.582214 8.11959 0.582214 17.302C0.582214 26.4844 8.02601 33.9282 17.2084 33.9282H38.6616C47.844 33.9282 55.2878 26.4844 55.2878 17.302C55.2878 8.11959 47.844 0.675781 38.6616 0.675781H17.2084Z"
                    fill="url(#paint0_linear_24_1411)"
                  />
                  <g opacity="0.9" filter="url(#filter0_d_24_1411)">
                    <circle
                      cx="17.6216"
                      cy="17.3029"
                      r="15.0173"
                      fill="url(#paint1_linear_24_1411)"
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_d_24_1411"
                    x="-102.603"
                    y="-102.922"
                    width="240.45"
                    height="240.45"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="52.6038" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.890196 0 0 0 0 0.188235 0 0 0 0 0.576471 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_24_1411"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_24_1411"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_24_1411"
                    x1="1.00854"
                    y1="39.2615"
                    x2="55.2962"
                    y2="39.2615"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#D2469E" stop-opacity="0.83" />
                    <stop offset="1" stop-color="#4BD5CF" stop-opacity="0.83" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_24_1411"
                    x1="8.52661"
                    y1="-5.47496"
                    x2="38.4924"
                    y2="23.6636"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#EA3498" />
                    <stop offset="1" stop-color="#A6075E" />
                  </linearGradient>
                  <clipPath id="clip0_24_1411">
                    <rect
                      width="54.7056"
                      height="33.665"
                      fill="white"
                      transform="translate(0.582214 0.675781)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      ) : null}

      {battery ? (
        <div className="battery_block">
          <div className="battery_one">
            <div className="battery_text_one">
              <h1 className="battery_text">{battery_one_text}</h1>
              <span className="battery_span">%</span>
            </div>

            <div className="battery_text_two">
              <h1 className="battery_text">{battery_two_text}</h1>
              <span className="battery_span">km</span>
            </div>
          </div>

          <div className="baterry_two">
            <svg
              width="7"
              height="159"
              viewBox="0 0 7 159"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_24_1398)">
                <rect
                  x="0.143097"
                  y="0.788086"
                  width="6.31267"
                  height="23.1465"
                  fill="#707678"
                />
                <rect
                  x="0.143158"
                  y="34.4536"
                  width="6.31267"
                  height="23.1465"
                  fill="#707678"
                />
                <rect
                  x="0.143158"
                  y="68.1206"
                  width="6.31267"
                  height="23.1465"
                  fill="white"
                />
                <rect
                  x="0.143158"
                  y="101.788"
                  width="6.31267"
                  height="23.1465"
                  fill="white"
                />
                <rect
                  x="0.143158"
                  y="135.454"
                  width="6.31267"
                  height="23.1465"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_24_1398">
                  <rect
                    width="6.31246"
                    height="157.811"
                    fill="white"
                    transform="translate(0.143097 0.788086)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      ) : null}

      {trip ? (
        <div className="trip_block">
          <div className="trip_one">
            <div className="trip_text_one">
              <h1 className="trip_text">{trip_one_text}</h1>
              <span className="trip_span">km</span>
            </div>

            <div className="trip_text_two">
              <h1 className="trip_text">{trip_two_text}</h1>
              <span className="trip_span">h</span>
            </div>
          </div>

          <div className="trip_two">
            <svg
              width="58"
              height="58"
              viewBox="0 0 58 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_24_1386)">
                <circle
                  opacity="0.7"
                  cx="29.1523"
                  cy="29.3511"
                  r="26.3007"
                  stroke="white"
                  stroke-width="4.2083"
                />
                <path
                  opacity="0.7"
                  d="M39.5724 30.2203H31.8024V38.9143H28.6944V30.2203H20.9244V27.3643H28.6944V18.9643H31.8024V27.3643H39.5724V30.2203Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_24_1386">
                  <rect
                    width="56.8096"
                    height="56.8096"
                    fill="white"
                    transform="translate(0.747437 0.946289)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default TechnicalBlocks;
