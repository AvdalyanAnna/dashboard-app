import React from 'react'
import './style.css'
import img from '../../../assets/img/Profile.png'
import img2 from '../../../assets/img/wallet.png'
import img3 from '../../../assets/img/man.png'
import img4 from '../../../assets/img/heart.png'
import img5 from '../../../assets/img/x.png'
const Profile = () => {
  return (
    <div className='Profile'>
      <div className="profile_container">
        <div className='profile-box'>
          <img src={img} alt="profile" />
          <h3>ID 363024</h3>
        </div>
        <div className='box2'>
          <img src={img2} alt="wallet" />
          <p>0xB35d53...9914</p>
        </div>
        <div className="box3">
          <div className="box3-block-item">
            <div className='one'>
              <img src={img3} alt="man" />
            </div>
            <p>5.5k</p>
          </div>
          <div className="hr2"></div>
          <div className="box3-block-item">
            <div className='two'>
              <img src={img4} alt="heart" />
            </div>
            <p>103k</p>
          </div>
        </div>
        <div className="box4">
          <div className="box5">
            <button className='button'>
              <img src={img5} alt="x" />
              <p>Show my cars</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile