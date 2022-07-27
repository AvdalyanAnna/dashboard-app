import React from 'react'
import './style.css'
import path from '../../../assets/img/Path.png'
import path2 from '../../../assets/img/Path2.png'
import path3 from '../../../assets/img/Path3.png'
import path4 from '../../../assets/img/Path4.png'
const Section = () => {
    return (
        <div className='Section'>
            <div className="section-block">
                <div className="block-items">
                    <div className="items-txt">
                        <h1>Money in project</h1>
                        <div className="hr3"></div>
                        <div className="txt">
                            <h2>$129,850</h2>
                            <p>+15%</p>
                        </div>

                    </div>
                    <div className="items-img">
                        <img src={path} alt="" />
                    </div>

                </div>
                <div className="block-items">
                    <div className="items-txt">
                        <h1>People here</h1>
                        <div className="hr4"></div>
                        <h2>25,000</h2>
                    </div>
                    <div className="items-img">
                        <img src={path2} alt="" />
                    </div>

                </div>
                <div className="block-items">
                    <div className="items-txt">
                        <h1>Money back</h1>
                        <div className="hr4"></div>
                        <h2>25,000</h2><span>-21%</span>
                    </div>
                    <div className="items-img">
                        <img src={path3} alt="" />
                    </div>

                </div>
                <div className="block-items">
                    <div className="items-txt">
                        <h1>Time of end</h1>
                        <div className="hr4"></div>
                        <h2>72%</h2>
                    </div>
                    <div className="items-img">
                        <img src={path4} alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Section