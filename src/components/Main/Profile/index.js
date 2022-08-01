import React from "react";
import "./style.css";
import img from "../../../assets/img/Profile.png";
import img2 from "../../../assets/img/wallet.png";
import img3 from "../../../assets/img/man.png";
import img4 from "../../../assets/img/heart.png";
import img5 from "../../../assets/img/x.png";
import { PROFILE_DATA } from "../../../constans/ProfileData";
import ProfileImage from "../../../UI/Profile/ProfileImage";
const Profile = () => {
  return (
    <div className="Profile">
      {PROFILE_DATA.map((e) => {
        return (
          <div className="profile_container">
            <div className="profile-box">
              <img src={img} alt="profile" />
              <h3>ID {e.profile_id}</h3>
            </div>
            <div className="box2">
              <img src={img2} alt="wallet" />
              <p>{e.wallet}</p>
            </div>
            <div className="box3">
              <div className="box3-block-item">
                <ProfileImage isFriends={true} />
                <p>{e.friends}</p>
              </div>
              <div className="hr2"></div>
              <div className="box3-block-item">
                <ProfileImage isLike={true} />
                <p>{e.like}</p>
              </div>
            </div>

            <div className="box4">
              <div className="box5">
                <p>Profit</p>
                <h1>{e.profit} BNB</h1>
              </div>
              <div className="button">
                <img src={img5} alt="x" />
                <p>Show my cars</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Profile;
