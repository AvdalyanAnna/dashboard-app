import React from 'react'
import './style.css'
import img from '../../../assets/img/footer/Shape.png'
import img2 from '../../../assets/img/footer/Vector.png'
import img3 from '../../../assets/img/footer/Group.png'
import img4 from '../../../assets/img/footer/message.png'
import img5 from '../../../assets/img/footer/telegram.png'
import img6 from '../../../assets/img/footer/duo.png'
import img7 from '../../../assets/img/footer/comment.png'
import img8 from '../../../assets/img/footer/chat.png'
import discord from '../../../assets/img/footer/discord.png'
import tel from '../../../assets/img/footer/tel.png'
import robot from '../../../assets/img/footer/robot.png'
import ellipse1 from '../../../assets/img/footer/ellipse1.png' 
const Contacts = () => {
  return (
    <div className='Contacts'>
        <div className="Contacts-container">
              <div className="box-touch">
                  <h3>Be in touch with us</h3>
                  <div className='hr'></div>
                  <img src={discord} alt="discord" />
                  <img src={tel} alt="tel" />
              </div>
          </div>
              <div className="parent-box">
            <div className="box1">
                <img src={img} alt="Shape" />
                <p>Dashboard</p>
            </div>
              <div className="box">
                  <img src={img2} alt="Shape" />
                  <p>Stats</p>
              </div>
              <div className="box">
                  <img src={img3} alt="Shape" />
                  <p>Partner bonus</p>
              </div>
              <div className="box">
                  <img src={img4} alt="Shape" />
                  <p>Info</p>
              </div>
              <div className="box">
                  <img src={img5} alt="Shape" />
                  <p>Telegram bot</p>
              </div>
              <div className="box">
                  <img src={img6} alt="Shape" />
                  <p>Promo</p>
              </div>
              <div className="box">
                  <img src={img7} alt="Shape" />
                  <p>News</p>
              </div>
              </div>

          <div className="last-container">
              <div className="last-box">
                    <div className="full">
                  <img src={img8} alt="Shape" />
                  <p>chat with us </p>
                  </div>

                  <div className='robot'>
                    <img src={robot} alt="robot" />
                  </div>
                  <div className="ellipse">
                      <img src={ellipse1} alt="ellipse" />
                  </div>
                    
                 
              </div>
          </div>
    </div>
  )
}

export default Contacts