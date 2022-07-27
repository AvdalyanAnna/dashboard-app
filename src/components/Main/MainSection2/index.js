import React from 'react'
import "./style.css"
import gal from '../../../assets/img/ptichka.png'
import plus from '../../../assets/img/plus.png'
import cars from '../../../assets/img/cars.png'
import Section3 from '../MainSection3'
const Section2 = () => {
    return (
        <div className='Section2'>
            <h2>Here all your cars and main information</h2>
            <div className="Section2-container">
                <div className="Section2-box1">
                    <div className="Section2-item1">
                        <div className="item1-block">
                            <h4>Binance Smart Game</h4>
                            <button className='active'>Active</button>
                        </div>
                        <div className='price'>
                            <h5>$129,850</h5>
                        </div>
                        <div className="Section2-item1-items">
                            <div className="items-box">
                                <div className="bx">
                                    <img src={gal} alt="" /></div>
                                <div className="bx">
                                    <img src={gal} alt="" />
                                </div>
                                <div className="bx">
                                    <img src={gal} alt="" /></div>
                                <div className="plus"><img src={plus} alt="" /></div>
                                <div className="empty"></div>
                                <div className="empty"></div>
                            </div>
                            <div className="items-box box-items">
                                <div className="empty"></div>
                                <div className="empty"></div>
                                <div className="empty"></div>
                                <div className="empty"></div>
                                <div className="empty"></div>
                                <div className="empty"></div>
                            </div>
                        </div>
                    </div>
                    <div className="Section2-item2">
                        <div className="item2-block">
                            <h4>Your last car for Race</h4>
                        </div>
                        <div className="flex-section2">
                            <div className="flex-section2-block">
                                <div className="items">
                                    <h6>Staking</h6>
                                    <button>+15%</button>
                                </div>
                                <div className="items">
                                    <h6>Race speed</h6>
                                    <button>+15%</button>
                                </div>
                            </div>
                            <div className="flex-section2-img">
                                <img src={cars} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
                <Section3 />
            </div>
          
        </div>
    )
}

export default Section2