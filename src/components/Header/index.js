import React from 'react'
import "./style.css"
import burger from '../../assets/img/menu.png'
import img1 from '../../assets/img/Group2271.png'
import smart from '../../assets/img/smart.png'
import img2 from '../../assets/img/Vector.png'
import user from '../../assets/img/Group2203.png'
import search from '../../assets/img/search.png'
export const Header = () => {
    return (
        <div className='Header'>
            <nav>
                <div className="nav-menu">
                    <img src={burger} />
                </div>
                <div className="nav-logo">
                    <img src={img1} />
                    <h1>New era of
                        crypto games</h1>
                </div>
                <div className="hr"></div>
                <div className="smart-chain-logo">
                    <img src={smart} alt="" />
                    <h1>Smart Chain</h1>
                </div>
                <div className="nav-item-img">
                    <div className='nav-item'>
                        <img src={img2} />
                        <h2>5.621 BNB</h2>
                        <span>0xB2...31</span>
                    </div>
                </div>
                <div className="nav-user">
                    <h1>ID #3241</h1>
                    <img src={user} alt="" />
                </div>
                <div className="nav-search">
                    <img src={search} alt="" />
                </div>
            </nav>
        </div>
    )
}
