import React from 'react'
import "./style.css"
import tesla from '../../../assets/img/tesla.png'
import up from '../../../assets/img/up.png'
import down from '../../../assets/img/down.png'
import on from '../../../assets/img/speaker.png'
import of from '../../../assets/img/switch-off.png'
import cars from '../../../assets/img/car.png'
import level from '../../../assets/img/level.png'
import plus from '../../../assets/img/plus.png'


const Section3 = () => {
  return (
    <div className='Section3'>
      <div className="Section3-navbar">
        <img src={tesla} alt="" />
        <h1>Cyber Car V2</h1>
        <p>LEVEL 8</p>
        <div className="range">
          <div className="img-range">
            <div className="range-number">
              <p>8</p>
            </div>
          </div>
        </div>

        <button className='btn-upg'>Upgrade</button>
      </div>
      <div className='Section3-block-items'>
        <div className="Section3-blocks">
          <div className="Section3-box">
            <div className="Section3-items">
              <h2>TEMPERATURE</h2>
              <div className="sections">
                <div className="section-p">
                  <p>20<span>&#8451;</span></p>
                </div>
                <div className='arrows'>
                  <div className="up">
                    <img src={up} alt="up" />
                  </div>
                  <div className="down">
                    <img src={down} alt="down" />
                  </div>
                </div>
              </div>
            </div>
            <div className="Section3-items">
              <h2 className='phone'>PHONE</h2>
              <div className="switch">
                <p>Speaker</p>
                <img src={on} alt="" />
              </div>
              <div className="switch">
                <p>Mute</p>
                <img src={of} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className='Section3-blocks-cars'>
          <img src={cars} alt="" />
        </div>
        <div className="Section3-box">
          <div className="Section3-items-battery">
            <h2>BATTERY</h2>
            <div className="sections-batery">
              <div className="section-p-batery">
                <h3>65 <span>%</span></h3>
                <h3>145 <span>km</span></h3>
              </div>
              <div className='arrows-batery'>
                <div className="level">
                  <img src={level} alt="up" />
                </div>
              </div>
            </div>
          </div>
          <div className="Section3-items">
            <h2 className='phone'>TRIP A</h2>
            <div className="trip-trip">
              <div className="trip-txt">
                <p>151 <span>km</span></p>
                <p>1.4 <span>h</span></p>
              </div>
              <div className="trip-img">
                <img src={plus} alt="" />
              </div>

            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Section3